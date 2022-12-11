import { Link } from 'react-router-dom';

function Header (){
    return (
        <div className="fact-text">
            <div className="a-header">
                <input type="checkbox" name="main-nav" id="main-nav" className="burger-check" />
                <label htmlFor="main-nav" className="burger menu"><span></span></label>
                <ul>
                    <li><Link as={Link} to="/page1"  > Page 1</Link></li>
                    <li><Link as={Link} to="/page2"  > Page 2</Link></li>
                    <li><Link as={Link} to="/page3"  > Page 3</Link></li>
                </ul>
            </div>
        </div>  
    )
}

export default Header;