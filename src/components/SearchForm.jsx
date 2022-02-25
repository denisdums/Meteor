import {Component} from "react";
import weatherService from "../services/weather.service";
import WeatherCard from "./cards/WeatherCard";


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
            <div className='flex flex-col'>
                <h1 className='text-2xl font-bold'>Recherchez une ville</h1>
                <p className='italic font-light'>Par exemple "Paris"...</p>
                <form onSubmit={this.handleSubmit} className='mt-6 mb-16'>
                    <fieldset className='flex justify-center bg-bottom bg-no-repeat bg-contain md:bg-cover items-center gap-2'>
                        <input type="search" id='search' placeholder='Recherchez une ville' name='search'
                               className='border border-light-grey bg-light-grey w-11/12 h-10 transform rounded px-4 focus:outline-none focus:ring-2 ring-blue'
                               onChange={this.handleChange}/>
                        <input type="submit" value='Rechercher' className='bg-blue text-white rounded p-2 hover:bg-blue-tone transition-all cursor-pointer'/>
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