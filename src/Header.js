import { Link } from 'react-router-dom';
import './Header.css'

function Header (){
    return (
        <div className="fact-text">
            <div className="a-header">
                
            <input type="checkbox" name="main-nav" id="main-nav" className="burger-check" />

                <label htmlFor="main-nav" className="burger menu"><span></span></label>
                <ul className='ulblock'>
                    <li><Link as={Link} to="/home" > <span> Home </span> </Link></li>
                    <li><Link as={Link} to="/page1" > <span> Beach </span> </Link></li>
                    <li><Link as={Link} to="/page2" > <span> Bedroom </span> </Link></li>
                    <li><Link as={Link} to="/page3" > <span> Street </span> </Link></li>
                </ul>
                
            </div>
        </div>  
    )
}

export default Header;