import cookiesHelper from "./cookies.helper";
import ReactGA from 'react-ga';

const googleAnalyticsHelper = {
    initGA() {
        let consent = cookiesHelper.getCookieConsent();
        if (consent){
            ReactGA.initialize(process.env.REACT_APP_GA_UA);
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    },
}

export default googleAnalyticsHelper