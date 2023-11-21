import BreadCrumb from "../layouts/breadcrumb"
import { useContext, useEffect, useState } from "react";
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
                                <img src="{{$car->thumbnail}}" alt=""/>
                            </div>
                            @foreach($thumbnails as $item)
                                <div className="item">
                                    <img src="{{$item->thumbnail}}" alt=""/>
                                </div>
                            @endforeach
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
                                     aria-labelledby="pills-home-tab"><p>BLA BLA</p></div>
                                <div className="tab-pane fade show active" id="pills-profile" role="tabpanel"
                                     aria-labelledby="pills-profile-tab">
                                    @foreach($reviews as $item)
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
                                                            @if($item=score == 0)
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                            @endif
                                                            @if($item=score == 1)
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                            @endif
                                                            @if($item=score == 2)
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                            @endif
                                                            @if($item=score == 3)
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                            @endif
                                                            @if($item=score == 4)
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
                                                            @endif
                                                            @if($item=score == 5)
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                                <span className="float-end"><i
                                                                        className="text-warning fa fa-star"></i></span>
                                                            @endif
                                                        </p>
                                                        <div className="clearfix"></div>
                                                        <p>ERROR</p>
                                                        <span className="float-end">10/10/2023</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                    <div style={{marginTop: "10px"}}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <h3>KIA</h3>
                        <div style={{marginBottom: "15px"}} className="d-flex justify-content-between align-items-center">
                            <div className="ratings">
                                @if($rate == 5)
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                @elseif($rate = 5 && $rate = 4)
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                @elseif($rate = 4 && $rate = 3)
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                @elseif($rate = 3 && $rate = 2)
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                @elseif($rate = 2 && $rate = 1)
                                    <i className="fa fa-star rating-color"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                @else
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                @endif
                            </div>
                            <h5 className="review-count">3 Reviews <span className="rating-color">4</span>
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
                                <spam className="d-value">Oil</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Km limit</span>
                                <spam className="d-value">23 Km</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Year</span>
                                <spam className="d-value">2023</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">Transmission</span>
                                <spam className="d-value">Auto</spam>
                            </div>
                            <div className="d-row">
                                <span className="d-title">License plate</span>
                                <spam className="d-value">29-E2 91740</spam>
                            </div>
                        </div>
                        <div className="spacer-single"></div>
                        <h4>Features</h4>
                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                            <li>
                                @if($car=reverse_sensor == 1)
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                @else
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                @endif
                                Reverse sensor
                            </li>
                            <li>
                                @if($car=airConditioner == 1)
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                @else
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                @endif
                                Air Conditioner
                            </li>
                            <li>
                                @if($car=cDPlayer == 1)
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                @else
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                @endif
                                CD Player
                            </li>
                            <li>
                                @if($car=brakeAssist == 1)
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use check"></i>
                                @else
                                    <i style={{color: "#199e1c", marginRight: "10px"}} className="fa fa-fw" aria-hidden="true"
                                       title="Copy to use close"></i>
                                @endif
                                Brake Assist
                            </li>

                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <div className="de-price text-center">
                            @foreach($rentalrate as $item)
                                @if($item=rental_type == "rent by day")
                                    <h4 style={{fontSize: "32px"}}>$100/day</h4>
                                @else
                                    <h4>$25/hour</h4>
                                @endif

                            @endforeach

                        </div>
                        <div className="spacer-30"></div>
                        <div className="de-box mb25">
                            <form action="" method="POST">
                                @csrf
                                <h4>Booking this car</h4>

                                <div className="spacer-20">
                                    <input type="hidden" name="car_id" value="{{$car->id}}"/>
                                </div>

                                <div className="row">

                                    <div className="col-lg-12 mb20">
                                        <h5>Pick Up Date & Time
                                            @error('rental_date')
                                                <span style={{fontSize: "12px"}} className="text-danger">ERROR</span>
                                            @enderror
                                            @error('rental_time')
                                                <span style={{fontSize: "12px"}} className="text-danger">ERROR</span>
                                            @enderror
                                        </h5>
                                        <div className="date-time-field">
                                                <input type="datetime-local" name="rental_date" value="" className="form-control" required=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mb20">
                                        <h5>Expected number of days/hours</h5>
                                        <input name="expected" className="form-control" type="number" min="0"/>
                                        @error("expected")
                                        <span style={{fontSize: "12px"}} className="text-danger">Error</span>
                                        @enderror
                                    </div>
                                </div>
                                @if (auth()=check())
                                    @switch(auth()=user()=status)
                                        @case(2) 
                                        <input type='submit' id='send_message' value='Book Now' className="btn-main btn-fullwidth"/>
                                        @break
                                        @default 
                                        <a href="" className="btn-main btn-fullwidth">License Verification</a>
                                        <span style={{color: "#ACACAC",fontWeight: "bold",fontSize: "12px"}}>(Verify license before renting car)</span>
                                    @endswitch
                                @else
                                    <a href="" className="btn-main btn-fullwidth">Login to Rent</a>
                                @endif
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