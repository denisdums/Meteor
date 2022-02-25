import CookieConsent from "react-cookie-consent";
import cookieIcon from '../assets/img/cookie.svg';
import googleAnalyticsHelper from "../helpers/googleAnalytics.helper";
import {Component} from "react";

class Cookies extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        googleAnalyticsHelper.initGA()
    }

    render() {
        return (
            <CookieConsent
                disableStyles
                enableDeclineButton={true}
                buttonText="Accepter"
                declineButtonText="Refuser"
                flipButtons={true}
                cookieName="cookieConsent"
                expires={150}
                onAccept={(acceptedByScrolling) => googleAnalyticsHelper.initGA()}
                containerClasses="flex flex-col gap-2 fixed left-0 w-full border-t-2 border-light-grey z-50 p-4 bg-white items-center justify-center"
                buttonWrapperClasses='flex gap-6'
                declineButtonClasses='border-2 border-blue px-2 py-1 text-blue rounded hover:text-blue-tone transition-all hover:border-blue-tone'
                buttonClasses='border-2 bg-blue border-blue px-2 py-1 text-white rounded transition-all hover:bg-blue-tone hover:border-blue-tone'
            >
                <span>Pour le bon fonctionnement de l'appli nous avons besoin de votre accord pour déposer quelques cookies<img
                    src={cookieIcon} alt='icon de cookie' className='ml-1 w-4 inline'/></span>
            </CookieConsent>
        )
    }
}

export default Cookies;