import { Link, useLocation } from 'react-router-dom'
import Cart from '../cart/Cart'

function Nav() {

    const location = useLocation();

    // Function to check if current location is the home page
    const isHomePage = () => {
        return location.pathname === '/' || location.pathname === '/home';
    };


  return (
    <div>
        <nav className="navbar navbar-expand-md fixed-top opacity-hover-off" id='myNavbar'>
        <div className="container-fluid">
            <ul className="navbar-nav">
                {/* Do not display home route link on the home route */}
                {!isHomePage() && (
                    <li className="nav-item">
                        <Link className='nav-link' to="/">Home</Link>
                    </li>
                )}
                
                {/* Display only these links on the home route  */}
                {isHomePage() && (
                    <>
                        <li className="nav-item">
                            <a className='nav-link' href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#menu">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className='nav-link' href="#contact">Contact</a>
                        </li>
                    </>
                )}
                
                {/* Display this link on all routes */}
                <li className="nav-item">
                    <Link className='nav-link' to="/login">Login</Link>
                </li>
            </ul>
        </div>
        <Cart />
    </nav>
    </div>
  )
}

export default Nav