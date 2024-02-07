import { Link } from 'react-router-dom'
import Cart from '../cart/Cart'

function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-md fixed-top opacity-hover-off" id='myNavbar'>
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className='nav-link' smooth to="/">Home</Link>
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