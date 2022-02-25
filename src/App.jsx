import './App.css';
import 'react-loading-skeleton/dist/skeleton.css'
import {Outlet} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {Component} from "react";
import {initFavs} from "./store/reducers/favsReducer";
import {connect} from "react-redux";
import CookieConsent from "react-cookie-consent";
import Cookies from "./components/Cookies";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfFavs: [],
        }
    }

    componentDidMount() {
        this.props.initFavs()
    }

    render() {
        return (
            <div className="container font-poppins mx-auto">
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Cookies/>
                <Navbar/>
            </div>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        initFavs: () => dispatch(initFavs())
    }
};

const mapStateToProps = state => {
    return {
        listOfFavs: state.favs.listOfFavs
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);