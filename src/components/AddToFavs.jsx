import {Component} from "react";
import starEmpty from '../assets/img/star-empty.svg'
import star from '../assets/img/star.svg'
import {connect} from "react-redux";
import {toggleFav} from "../store/reducers/favsReducer";
import favsHelper from "../helpers/favs.helper";

class AddToFavs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
            star: false,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.listOfFavs !== this.props.listOfFavs) {
            this.setState({listOfFavs: this.props.listOfFavs})
            this.setState({star: favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs)})
        }
        if (prevProps.city !== this.props.city) {
            this.setState({star: favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs)})
        }
    }

    componentDidMount() {
        this.setState({star: favsHelper.isCityInFavs(this.props.city, this.props.listOfFavs)})
    }

    handleFav() {
        this.toggleFav(this.props.city)
    }

    toggleFav = (city) => {
        this.props.toggleFav(city)
    }

    render() {
        return (
            <button className='w-6 h-6 bg-light-grey rounded bg-50 bg-center bg-no-repeat absolute top-4 right-4'
                    style={{backgroundImage: `url(${this.state.star ? star : starEmpty})`}}
                    onClick={() => this.handleFav()}/>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        toggleFav: (city) => dispatch(toggleFav(city))
    }
};

const mapStateToProps = state => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToFavs);