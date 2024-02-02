import { HashLink as Link } from 'react-router-hash-link'
import Cart from '../cart/Cart'

function Nav() {
  return (
    <div>
        <nav className="navbar navbar-expand-md fixed-top opacity-hover-off" id='myNavbar'>
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className='nav-link' smooth to="#">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' smooth to="#menu">Menu</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' smooth to="#about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' smooth to="#contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className='nav-link' smooth to="#login">Login</Link>
                </li>
            </ul>
        </div>
        <Cart />
    </nav>
    </div>
  )
}

export default Nav