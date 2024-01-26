import { Link } from "react-router-dom"
function Header() {
    return (
        <header className="bg-img d-flex flex-column justify-content-between" id="home">
            <div></div>
            <div className="d-flex flex-column text-center">
                {/* if using logo, remember to change 'text-center' to 'justfy-content-center */}
                <span className="display-2">More <br /> Than a Meal!</span>
                <p><Link to="/menu" className="btn btn-lg btn-dark hover-btn fs-4">View Menu</Link></p>
            </div>
            <div className="d-flex">
                <span className="bg-dark text-white p-3 h2">Open from 10am to 11pm - Call 333-456-9999</span>
            </div>
        </header>
    )
}

export default Header