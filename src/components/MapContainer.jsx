import {Component, createRef} from "react";
import {connect} from "react-redux";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import locationHelper from "../helpers/location.helper";

mapboxgl.accessToken = process.env.REACT_APP_API_MAP_KEY;

class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            favsWeathers: {},
            lon: -70.9,
            lat: 42.35,
            zoom: 9,
        }
        this.map = createRef()
        this.mapContainer = createRef()
    }

    async componentDidMount() {
        const map = await this.initMap()
    }

    async initMap(){
        if (this.map.current) return;
        const localisation = await locationHelper.getLocalisation();
        this.map.current = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: process.env.REACT_APP_API_MAP_STYLE,
            center: [localisation.lon, localisation.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div>
                <div ref={this.mapContainer} className="map-container"/>
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