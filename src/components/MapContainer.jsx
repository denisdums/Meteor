import {Component} from "react";
import {connect} from "react-redux";
import ReactMapboxGl, {Marker} from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import locationHelper from "../helpers/location.helper";
import markerIcon from '../assets/img/marker.svg';
import markerHome from '../assets/img/marker-black.svg';
import favsService from "../services/favs.service";

const Map = ReactMapboxGl({accessToken: process.env.REACT_APP_API_MAP_KEY});

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            favsWeathers: [],
            lon: null,
            lat: null,
            zoom: 4,
        }
    }

    async componentDidMount() {
        const localisation = await locationHelper.getLocalisation();
        this.setState({lon: localisation.lon})
        this.setState({lat: localisation.lat})
        await this.syncFavsWeather();
    }

    async syncFavsWeather() {
        const favsWeathers = await favsService.getFavsWeather(this.props.listOfFavs);
        this.setState({favsWeathers: favsWeathers});
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfFavs !== this.props.listOfFavs) {
            this.setState({listOfFavs: this.props.listOfFavs});
            await this.syncFavsWeather();
        }
    }

    render() {
        return (
            <>
                {
                    this.state.lon ? (
                        <Map
                            style={process.env.REACT_APP_API_MAP_STYLE}
                            className='map-container'
                            zoom={[this.state.zoom]}
                            center={[this.state.lon, this.state.lat]}>
                            <Marker coordinates={[this.state.lon, this.state.lat]} anchor='bottom'>
                                <img id={'marker-home'} src={markerHome}/>
                            </Marker>
                            {this.state.favsWeathers.length > 0 ? (
                                this.state.favsWeathers.map((fav) => (
                                    <Marker key={fav.city} coordinates={[fav.coords.lon, fav.coords.lat]} anchor='bottom'>
                                        <img id={`marker-${fav.city}`} src={markerIcon}/>
                                    </Marker>
                                ))) : ''}
                        </Map>) : ''
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps)(MapContainer);