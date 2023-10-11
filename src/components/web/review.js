import BreadCrumb from "../layouts/breadcrumb";

export default function Review(){
    return(
        <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <BreadCrumb/>

        <section aria-label="section">
            <div className="container">
                <div className="row g-custom-x">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <form name="contactForm" id="contact_form" className="form-border" method="post">
                            <div className="card text-center mb-5">
                                <div className="row" style={{marginLeft: "85px", marginRight: "85px"}}>
                                    <div className="col-md-3 mb-4 mb-md-0">
                                        <div className="bg-image ripple rounded-5 mb-4 overflow-hidden d-block" data-ripple-color="light">
                                            <img
                                                src="images/cars/KIA EV6 1.jpg"
                                                className="w-100" height="100px" alt="Elegant shoes and shirt"/>
                                            <a href="#">
                                                <div className="hover-overlay">
                                                    <div className="mask" style={{backgroundColor: "hsla(0, 0%, 98.4%, 0.2)"}}></div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-4 mb-md-0">
                                        <div className="row" style={{textAlign: "left"}}>
                                            <p className="col-lg-12 fw-bold">KIA</p>
                                            <p className="col-lg-12 mb-1">
                                                <span className="text-muted me-2">Seats:</span><span>4</span>
                                            </p>
                                            <p>
                                                <span className="col-lg-12 text-muted me-2">License Plate:</span><span>29-E2 91740</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-3 mb-4 mb-md-0">
                                        <h5 className="mb-2">
                                            <span className="align-middle">$ 50 /Day</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="comment-area">
                                    <textarea className="form-control" name="message" placeholder="what is your view?" rows="4"></textarea>
                                </div>
                                <div className="rate bg-success py-3 text-white mt-3">
                                    <h6 className="mb-0">Rate your car</h6>
                                    <div className="rating" id="rating">
                                        <input type="radio" name="score" value="5" id="5"/><label for="5">☆</label>
                                        <input type="radio" name="score" value="4" id="4"/><label for="4">☆</label>
                                        <input type="radio" name="score" value="3" id="3"/><label for="3">☆</label>
                                        <input type="radio" name="score" value="2" id="2"/><label for="2">☆</label>
                                        <input type="radio" name="score" value="1" id="1"/><label for="1">☆</label>
                                    </div>
                                    <div className="buttons px-4 mt-0">
                                        <button className="btn btn-warning btn-block rating-submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        </section>
    </div>
    )
}