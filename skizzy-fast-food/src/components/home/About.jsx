import freeBurgers from "../../assets/tetiana-shevereva-unsplash.jpg"
import chef from "../../assets/febrian-zakaria-unsplash.jpg"

function About() {
  return (
    <div className="container-fluid py-5 text-white about-section" id="about">
        <div className="container">
            <h2 className="text-center display-2 mb-3">ABOUT</h2>
            <h3 className="display-5 mb-4"><b>Opening Hours</b></h3>
            <div className="row fs-4">
                {/* make both divs below sit at the center of the page */}
                <div className="col-6">
                    <p>Mon & Tue CLOSED</p>
                    <p>Wed 10:00 - 24:00</p>
                    <p>Thurs 10:00 - 24:00</p>
                </div>
                <div className="col-6">
                    <p>Fri 10:00 - 12:00</p>
                    <p>Saturday 10:00 - 23:00</p>
                    <p>Sunday CLOSED</p>
                </div>
            </div>

            <h2 className="display-5 my-3 text-center"><b>History</b></h2>
            <p className="fs-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae doloribus sed maiores quia veniam, ratione nihil consequatur dicta quis eum voluptatibus porro, vitae, totam odit voluptatem excepturi amet deserunt quisquam possimus. Alias cupiditate rerum minus sapiente quasi quia veniam voluptas natus numquam illo nostrum dolores nobis eveniet ipsa a quae esse, fugiat ex dolore vero odit aperiam. Distinctio et atque ducimus sint enim esse, iure possimus dolor saepe? At voluptates dicta vero voluptatum quas laborum dolore pariatur iste ullam ratione. Minus obcaecati sint nemo, accusamus maxime quos quo explicabo atque adipisci consequatur. Dolorem porro facere fugit similique eaque quisquam fugiat?
            </p>

            <div className="row">
                <div className="col-lg-9 col-md-8 col-sm-12">
                    <p className="fs-4"><b>The Owner</b> Mrs Oma herself, Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione id quod? Obcaecati tempore iure, atque, placeat officiis, magnam id minima dicta saepe iste consequatur quos necessitatibus optio nesciunt. Quae rerum est quibusdam porro voluptate natus quis animi, cumque eius! </p>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-12">
                    <img src={chef} alt="Bar Photo by Tetiana Shevereva on Unsplash" width={"170px"} className="rounded-pill" />
                </div>
            </div>

            <p className="fs-2">We are proud of our stuff.</p>
            <img src={freeBurgers} alt="Chef Photo by Febrian Zakaria on Unsplash" width={"100%"} className="my-3 img-greyscale" />
        </div>
    </div>
  )
}

export default About