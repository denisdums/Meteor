import logo_black from '../assets/img/logo_black.svg';

function Header() {
    return (
        <header className='py-6'>
            <div className='h-6'>
                <img src={logo_black} alt="logo" className='w-full h-full object-contain object-left'/>
            </div>
        </header>
    )
}

export default Header;