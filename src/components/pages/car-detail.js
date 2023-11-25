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
    },[id]);
    return(
        <div className="no-bottom no-top zebra" id="content">
            <div id="top"></div>
            <section id="subheader" className="jarallax text-light">
                <img src="images/background/2.jpg" className="jarallax-img" alt=""/>
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
									<h1>Vehicle Fleet</h1>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
            </section>
        <section id="section-car-details">
            <div className="container">
                <div className="row g-5">
                    <div className="col-lg-6">
                        <div id="slider-carousel" className="owl-carousel">
                            <div className="item">
                                <img src="../images/car-single/1.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="../images/car-single/2.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="../images/car-single/3.jpg" alt="" />
                            </div>
                            <div className="item">
                                <img src="../images/car-single/4.jpg" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <h3>BMW M2 2020</h3>
                        <p>The BMW M2 is the high-performance version of the 2 Series 2-door coupé. The first generation of the M2 is the F87 coupé and is powered by turbocharged.</p>

                        <div className="spacer-10"></div>

                        <h4>Specifications</h4>
                        <div className="de-spec">
                            <div className="d-row">
                                <span className="d-title">Body</span>
                                <span className="d-value">Sedan</span>
                            </div>
                            <div className="d-row">
                                    <span className="d-title">Seat</span>
                                    <span className="d-value">2 seats</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Door</span>
                                    <span className="d-value">2 doors</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Luggage</span>
                                    <span className="d-value">150</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Fuel Type</span>
                                    <span className="d-value">Hybird</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Engine</span>
                                    <span className="d-value">3000</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Year</span>
                                    <span className="d-value">2020</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Mileage</span>
                                    <span className="d-value">200</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Transmission</span>
                                    <span className="d-value">Automatic</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Drive</span>
                                    <span className="d-value">4WD</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Fuel Economy</span>
                                    <span className="d-value">18.5</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Exterior Color</span>
                                    <span className="d-value">Blue Metalic</span>
                                </div>
                                <div className="d-row">
                                    <span className="d-title">Interior Color</span>
                                    <span className="d-value">Black</span>
                                </div>
                        </div>

                        <div className="spacer-single"></div>

                        <h4>Features</h4>
                        <ul className="ul-style-2">
                            <li>Bluetooth</li>
                            <li>Multimedia Player</li>
                            <li>Central Lock</li>
                            <li>Sunroof</li>
                        </ul>
                    </div>

                    <div className="col-lg-3">
                        <div className="de-price text-center">
                            Daily rate
                            <h3>$265</h3>
                        </div>
                        <div className="spacer-30"></div>
                        <div className="de-box mb25">
                            <form name="contactForm" id="contact_form" method="post">
                                <h4>Booking this car</h4>

                                <div className="spacer-20"></div>

                                <div className="row">
                                    <div className="col-lg-12 mb20">
                                    <h5>Pick Up Location</h5>
                                            <input type="text" name="PickupLocation"  placeholder="Enter your pickup location" id="autocomplete"  className="form-control"/>

                                            <div className="jls-address-preview jls-address-preview--hidden">
                                                <div className="jls-address-preview__header">
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 mb20">
                                            <h5>Drop Off Location</h5>
                                            <input type="text" name="DropoffLocation"  placeholder="Enter your dropoff location" id="autocomplete2"  className="form-control"/>

                                            <div className="jls-address-preview jls-address-preview--hidden">
                                                <div className="jls-address-preview__header">
                                                </div>
                                            </div>
                                        </div>
                                </div>

                                <input type="submit" id="send_message" value="Book Now" className="btn-main btn-fullwidth" />

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