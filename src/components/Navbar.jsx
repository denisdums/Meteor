import {Link} from "react-router-dom";
import home_icon from '../assets/img/home.svg';
import star_icon from '../assets/img/star.svg';
import search_icon from '../assets/img/search.svg';
import map_icon from '../assets/img/map.svg';
import {useLocation} from "react-router-dom";

function Navbar() {
    const linkClasses = 'py-4 border-b-4  transition-all';
    const activeClasses = 'border-blue';
    const inactiveClasses = 'border-white';
    const iconClasses = 'w-6';
    const activePath = useLocation().pathname;

    return (
        <nav className='z-10 fixed w-full bg-white bottom-0 container left-1/2 -translate-x-1/2'>
            <ul className='w-full flex justify-around'>
                <li className={`${linkClasses} ${activePath === '/' ? activeClasses : inactiveClasses}`}><Link to='/'><img className={iconClasses} src={home_icon} alt=""/></Link></li>
                <li className={`${linkClasses} ${activePath === '/favs' ? activeClasses : inactiveClasses}`} ><Link to='/favs'><img className={iconClasses} src={star_icon} alt=""/></Link></li>
                <li className={`${linkClasses} ${activePath === '/search' ? activeClasses : inactiveClasses}`}><Link to='/search'><img className={iconClasses} src={search_icon} alt=""/></Link></li>
                <li className={`${linkClasses} ${activePath === '/map' ? activeClasses : inactiveClasses}`}><Link to='/map'><img className={iconClasses} src={map_icon} alt=""/></Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
