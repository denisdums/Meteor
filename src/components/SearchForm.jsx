import {Component} from "react";
import weatherService from "../services/weather.service";
import WeatherCard from "./cards/WeatherCard";
import SunCard from "./cards/SunCard";
import AddToFavs from "./AddToFavs";

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherResult: null,
            search: null,
        }
    }

    handleChange = (e) => {
        this.setState({search: e.target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const cityName = this.state.search;
        const searchResult = await weatherService.getWeatherByCityName(cityName);
        this.setState({weatherResult: searchResult})
        e.target.reset();
    }

    render() {
        return (
            <div className='flex flex-col gap-6'>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <input type="search" id='search' placeholder='Recherchez une ville' name='search'
                               className='bg-light-grey w-full h-10 rounded px-4 focus:outline-none focus:ring-2 ring-blue'
                               onChange={this.handleChange}/>
                    </fieldset>
                </form>
                {this.state.search && this.state.weatherResult ? (
                    this.state.weatherResult.notFound ? (
                        <span>Pas de résultats trouvés</span>
                    ) : (
                        <>
                            <WeatherCard weather={this.state.weatherResult}/>
                        </>
                    )
                ) : ''}
            </div>

        )
    }
}

export default SearchForm;