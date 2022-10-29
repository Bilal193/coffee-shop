import './Header.css';
import Navbar from './Navbar';
import Banner from './Banner';
const Header=()=>{

    return(
        <div className='header-background'>
            <Navbar/>
            <Banner/>
        </div>
    )
}
export default Header;