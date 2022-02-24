import {Component} from "react";
import favsService from "../services/favs.service";
import {connect} from "react-redux";
import WeatherCard from "./cards/WeatherCard";
import icon_star from "../assets/img/star.svg";

class FavsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            favsWeathers: [],
        }
    }

    async componentDidMount() {
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
            <div className='flex flex-col gap-6 pb-32'>
                {this.state.favsWeathers.length > 0 ? (
                    this.state.favsWeathers.map((weather) => (
                        <WeatherCard key={weather.city} weather={weather}/>
                    ))) : (
                        <div className='w-full h-96 relative flex flex-col items-center justify-center gap-2'>
                            <span className='text-4xl font-semibold'>Oh...</span>
                            <span className='text-center'>Vous n'avez pas encore de favoris enregistrés</span>
                        </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps)(FavsList);