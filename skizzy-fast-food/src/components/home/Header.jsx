

function Header() {
    return (
        <header className="bg-img d-flex flex-column justify-content-between" id="home">
            <div></div>
            <div className="d-flex flex-column text-start">
                {/* Change 'text-center' to 'justfy-content-center if using the logo*/}
                <span className="display-2 fw-bold ms-5" style={{fontFamily: "Alumni Sans", color : "#141414"}}>More <br /> Than a Meal!</span>
            </div>
            <div className="d-flex">
                <span className="bg-dark text-white p-3 h2" id='menu'>Open from 10am to 11pm - Call 333-456-9999</span>
            </div>
        </header>
    )
}

export default Header