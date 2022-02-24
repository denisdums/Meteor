import {Component} from "react";
import {connect} from "react-redux";
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import locationHelper from "../helpers/location.helper";
import markerIcon from '../assets/img/marker.svg';
import markerHome from '../assets/img/marker-black.svg';
import markerCurrent from '../assets/img/marker-yellow.svg';
import favsService from "../services/favs.service";
import weatherService from "../services/weather.service";
import MarkerToggle from "./MarkerToggle";

const Map = ReactMapboxGl({accessToken: process.env.REACT_APP_API_MAP_KEY});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            favsWeathers: [],
            markerWeather: null,
            lon: null,
            lat: null,
            zoom: 4,
            center: [],
        }
    }

    async componentDidMount() {
        const localisation = await locationHelper.getLocalisation();
        this.setState({center: [localisation.lon, localisation.lat]})
        this.setState({lon: localisation.lon})
        this.setState({lat: localisation.lat})
        await this.syncFavsWeather();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfFavs !== this.props.listOfFavs) {
            this.setState({listOfFavs: this.props.listOfFavs});
            await this.syncFavsWeather();
        }
    }

    async syncFavsWeather() {
        const favsWeathers = await favsService.getFavsWeather(this.props.listOfFavs);
        this.setState({favsWeathers: favsWeathers});
    }

    async handleClickMarker(e) {
        const coords = e.target.dataset;
        await this.updateMarker(coords)
    }

    async updateMarker(coords) {
        const markerWeather = await weatherService.getCurrentWeatherByCoords(coords)
        this.setState({center: [markerWeather.coords.lon, markerWeather.coords.lat]})
        this.setState({markerWeather: markerWeather});
    }

    async handleClickMap(map, event) {
        if (this.state.markerWeather != null) {
            this.setState({markerWeather: null})
        } else {
            await this.updateMarker({lon: event.lngLat.lng, lat: event.lngLat.lat})
        }
    }

    render() {
        return (
            <div className='relative overflow-hidden'>
                {
                    this.state.lon ? (
                        <Map
                            style={process.env.REACT_APP_API_MAP_STYLE}
                            className='map-container'
                            zoom={[this.state.zoom]}
                            center={this.state.center}
                            onClick={(map, event) => this.handleClickMap(map, event)}>
                            <Marker coordinates={[this.state.lon, this.state.lat]}
                                    anchor='bottom'
                                    onClick={(e, a) => this.handleClickMarker(e, a)}>
                                <img id={'marker-home'} src={markerHome} data-lat={this.state.lat}
                                     data-lon={this.state.lon}/>
                            </Marker>
                            {this.state.favsWeathers.length > 0 ? (
                                this.state.favsWeathers.map((fav) => (
                                    <Marker key={fav.city}
                                            coordinates={[fav.coords.lon, fav.coords.lat]}
                                            anchor='bottom'
                                            onClick={(e) => this.handleClickMarker(e)}>
                                        <img id={`marker-${fav.city}`} src={markerIcon} data-lat={fav.coords.lat}
                                             data-lon={fav.coords.lon}/>
                                    </Marker>
                                ))) : ''}
                            {this.state.markerWeather ? (
                                <Marker key={this.state.markerWeather.city}
                                        coordinates={[this.state.markerWeather.coords.lon, this.state.markerWeather.coords.lat]}
                                        anchor='bottom'
                                        onClick={(e) => this.handleClickMarker(e)}>
                                    <img id={`marker-${this.state.markerWeather.city}`} src={markerCurrent}
                                         data-lat={this.state.markerWeather.coords.lat}
                                         data-lon={this.state.markerWeather.coords.lon}/>
                                </Marker>
                            ) : ''}
                        </Map>) : ''
                }
                <div
                    className={`absolute z-50 bottom-0 lef-0 w-full transform transition-all ${this.state.markerWeather ? 'translate-y-0' : 'translate-y-full'}`}>
                    {this.state.markerWeather ? (<MarkerToggle weather={this.state.markerWeather}/>) : ''}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps)(MapContainer);