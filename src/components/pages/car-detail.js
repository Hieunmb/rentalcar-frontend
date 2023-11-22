import BreadCrumb from "../layouts/breadcrumb"
import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { useParams } from "react-router-dom";
export default function CarDetail(){
    const {id} = useParams();
    const [car,setCar] = useState({});
    const loadCar = async ()=>{
        try {
            const rs = await api.get(url.CAR.DETAIL+`?id=${id}`);
            setCar(rs.data);
        } catch (error) {

        }
    }
    useEffect(()=>{
        loadCar();
        console.log(car);
    },id);
    return(
        <div className="no-bottom no-top zebra" id="content">
        <div id="top"></div>

        <BreadCrumb/>

        <section id="section-car-details">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div id="slider-carousel" className="owl-carousel">
                            <div className="item">
                            <img src={process.env.PUBLIC_URL + '/images/car-single/1.jpg'} alt="" />
                            </div>
                                <div className="item">
                                    <img src="{{$item->thumbnail}}" alt=""/>
                                </div>
                        </div>
                        <div className="col-md-12">
                            <h3>Information</h3>
                            <div className="spacer30"></div>
                            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-home-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-home" type="button" role="tab"
                                            aria-controls="pills-home" aria-selected="true">Description
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-profile-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-profile" type="button" role="tab"
                                            aria-controls="pills-profile" aria-selected="false">Review
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade" id="pills-home" role="tabpanel"
                                     aria-labelledby="pills-home-tab"><p>{car.description}</p></div>
                                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel"
                                     aria-labelledby="pills-profile-tab">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <img src="https://image.ibb.co/jw55Ex/def_face.jpg"
                                                             className="img img-rounded img-fluid"/>
                                                    </div>
                                                    <div className="col-md-10">
                                                        <p>
                                                            <a className="float-left" href="#">
                                                                <strong>
                                                                        Me
                                                                </strong>
                                                            </a>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                            
                                                        </p>
                                                        <div className="clearfix"></div>
                                                        <p>bla</p>
                                                        <span className="float-end">23-2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    <div style={{marginTop:"10px"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h3>{car.model}</h3>
                        <div style={{marginBottom: "15px"}} className="d-flex justify-content-between align-items-center">
                            <div className="ratings">
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                            </div>
                            <h5 className="review-count">4 Reviews <span className="rating-color">3</span>
                            </h5>
                        </div>
                        <div className="spacer-10"></div>

                        <h4>Specifications</h4>
                        <div className="de-spec">
                            <div className="d-row">
                                <span className="d-title">Body</span>
                                <spam className="d-value">Sedan</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Fuel Type</span>
                                <spam className="d-value">{car.fuelType}</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Km limit</span>
                                <spam className="d-value">{car.km_limit} Km</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Year</span>
                                <spam className="d-value">{car.modelYear}</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Transmission</span>
                                <spam className="d-value">{car.transmission}</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">License plate</span>
                                <spam className="d-value">{car.license_plate}</spam>
                            </div>
                        </div>
                        <div className="spacer-single"></div>
                        <h4>Features</h4>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                Reverse sensor
                            </li>
                            <li>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                Air Conditioner
                            </li>
                            <li>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                CD Player
                            </li>
                            <li>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                Brake Assist
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <div className="de-price text-center">
                                    <h4 style={{fontSize: "32px"}}>${car.price}/day</h4>
                                    <h4>${car.price}/hour</h4>


                        </div>
                        <div className="spacer-30"></div>
                        <div className="de-box mb25">
                            <form action="" method="POST">
                                <h4>Booking this car</h4>

                                <div className="spacer-20">
                                    <input type="hidden" name="car_id" value="{{$car->id}}"/>
                                </div>

                                <div className="row">

                                    <div className="col-lg-12 mb20">
                                        <h5>Pick Up Date & Time
                                                <span style={{fontSize: "12px"}} className="text-danger">bla</span>
                                                <span style={{fontSize: "12px"}} className="text-danger">bla</span>
                                        </h5>
                                        <div className="date-time-field">
                                                <input type="datetime-local" name="rental_date" value="" className="form-control" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb20">
                                        <h5>Expected number of days/hours</h5>
                                        <input name="expected" className="form-control" type="number" min="0"/>
                                        <span style={{fontSize: "12px"}} className="text-danger">bla</span>
                                    </div>
                                </div>
                                        <input type='submit' id='send_message' value='Book Now' className="btn-main btn-fullwidth"/>
                                        <a href="" className="btn-main btn-fullwidth">License Verification</a>
                                        <span style={{color: "#ACACAC",fontWeight: "bold",fontSize: "12px"}}>(Verify license before renting car)</span>
                                    <a href="" className="btn-main btn-fullwidth">Login to Rent</a>
                                <div className="clearfix"></div>
                            </form>
                        </div>
                        <div className="de-box">
                            <h4>Share</h4>
                            <div className="de-color-icons">
                                <span><i className="fa fa-twitter fa-lg"></i></span>
                                <span><i className="fa fa-facebook fa-lg"></i></span>
                                <span><i className="fa fa-reddit fa-lg"></i></span>
                                <span><i className="fa fa-linkedin fa-lg"></i></span>
                                <span><i className="fa fa-pinterest fa-lg"></i></span>
                                <span><i className="fa fa-stumbleupon fa-lg"></i></span>
                                <span><i className="fa fa-delicious fa-lg"></i></span>
                                <span><i className="fa fa-envelope fa-lg"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}