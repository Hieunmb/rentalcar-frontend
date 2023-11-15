import BreadCrumb from "../layouts/breadcrumb";

export default function Booking(){
    return(
       
    <div className="no-bottom no-top zebra" id="content">
        <div id="top"></div>

       <BreadCrumb/>

        <section id="section-hero" aria-label="section" className="no-top mt-80 sm-mt-0">
            <div className="container">
                <form method="POST" action="">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="spacer-single sm-hide"></div>
                            <div className="p-4 rounded-3 shadow-soft" data-bgcolor="#ffffff">
                                <div id='contact_form'>
                                    <div id="step-1" className="row">
                                        <div className="col-lg-6 mb30">
                                            <div className="row">
                                                <div className="col-lg-6 mb20">
                                                    <h5>Full Name</h5>
                                                    <input className="form-control" value="{{auth()->user()->name}}"
                                                           type="text" readonly/>
                                                    <div className="jls-address-preview jls-address-preview--hidden">
                                                        <div className="jls-address-preview__header">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb20">
                                                    <h5>Pick Up Location</h5>
                                                    <select name="pickup_location" id="pickup_location" onchange="showAddressInput()" className="form-control">
                                                        <option value="pick up the car at the store">pick up the car at the store</option>
                                                        <option value="pick up car at home (only 15km radius)">pick up car at home (only 15km radius)</option>
                                                    </select>
                                                    <div className="jls-address-preview jls-address-preview--hidden">
                                                        <div className="jls-address-preview__header">
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb20">
                                                    <h5>Email</h5>
                                                    <input type="email" value="{{auth()->user()->email}}"  name="email" placeholder="sample@yourcompany.com"
                                                           autocomplete="off" className="form-control"/>
                                                    <div className="jls-address-preview jls-address-preview--hidden">
                                                        <div className="jls-address-preview__header">
                                                        </div>
                                                    </div>
                                                    @error("email")
                                                    <p className="text-danger"><i>Error</i></p>
                                                    @enderror
                                                </div>
                                                <div className="col-lg-6 mb20">
                                                    <h5>Telephone</h5>
                                                    <input type="text" value="{{auth()->user()->phone}}" name="telephone" placeholder="+66-4353434"
                                                           autocomplete="off" className="form-control"/>
                                                    <div className="jls-address-preview jls-address-preview--hidden">
                                                        <div className="jls-address-preview__header">
                                                        </div>
                                                    </div>
                                                    @error("telephone")
                                                    <p className="text-danger"><i>Error</i></p>
                                                    @enderror
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 mb20">
                                                    <h5>Choose a rental type</h5>
                                                    <select name="rental_type" id="mySelect2" className="form-control"
                                                            onchange="updateInput()">
                                                        @foreach($rentalrate as $rt)
                                                            <option value="">SUV</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 mb20">
                                                    <h5>Price</h5>
                                                    @foreach($price as $i)
                                                        <input name="car_price" value="{{$i->price}}" className="form-control" type="text" id="myLable" readonly/>
                                                    @endforeach
                                                </div>
                                                <div className="col-lg-6 mb20">
                                                    <h5>Pick Up Date & Time</h5>
                                                        @error('rental_date')
                                                        <span style={{fontSize: "12px"}} className="text-danger">Error</span>
                                                        @enderror
                                                    <div className="date-time-field">
                                                        <input type="datetime-local" name="rental_date" value="{{$rental_date}}" className="form-control" required=""/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 mb20">
                                                    <h5>Expected number of days/hours</h5>
                                                    <input onchange="updateInput()" oninput="checkMinValue(this)" name="expected" id="expected" value="{{$expected}}" className="form-control" type="number" min="1"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb30" id="address_input" style={{display: "none"}}>
                                                <h5>Address</h5>
                                                <input type="text" name="address" id="address"
                                                       autocomplete="off" className="form-control"/>
                                                <div className="jls-address-preview jls-address-preview--hidden">
                                                    <div className="jls-address-preview__header">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb30">
                                                <h5>Message</h5>
                                                <textarea type="text" name="message" id="autocomplete"
                                                          autocomplete="off" className="form-control"></textarea>
                                                <div className="jls-address-preview jls-address-preview--hidden">
                                                    <div className="jls-address-preview__header">
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mb30">
                                                <div className="item_filter_group">
                                                    <h4>Accompanied service</h4>
                                                    <div className="de_form">
                                                        @foreach($services as $item)
                                                            <div className="de_checkbox">
                                                                <input id="vehicle_type_{{$item->id}}"
                                                                       name="services[]" type="checkbox"
                                                                       value="{{ $item->id }}" onchange="calculateTotal()"/>
                                                                <label
                                                                    for="vehicle_type_{{$item->id}}">Car 100$</label>
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="d-flex justify-content-between mb-3 userdetails">
                                                <p className="fw-bold">KIA</p>
                                                <p className="fw-lighter"><span
                                                        className="fas fa-dollar-sign"></span>100</p>
                                            </div>
                                            <div id="my" className="carousel slide carousel-fade img-details"
                                                 data-bs-ride="carousel"
                                                 data-bs-interval="2000">
                                                <div className="carousel-indicators">
                                                    <button type="button" data-bs-target="#my" data-bs-slide-to="0"
                                                            className="active"
                                                            aria-current="true" aria-label="Slide 1"></button>
                                                    <button type="button" data-bs-target="#my" data-bs-slide-to="1"
                                                            aria-label="Slide 2"></button>
                                                    <button type="button" data-bs-target="#my" data-bs-slide-to="2"
                                                            aria-label="Slide 3"></button>
                                                </div>
                                                <div className="carousel-inner">
                                                    <div className="carousel-item active">
                                                        <img
                                                            src="{{$car->thumbnail}}"
                                                            className="d-block w-100"/>
                                                    </div>
                                                    @foreach($thumbnails as $item)
                                                        <div className="carousel-item">
                                                            <img
                                                                src="{{$item->thumbnail}}"
                                                                className="d-block w-100"/>
                                                        </div>
                                                    @endforeach

                                                </div>
                                                <button className="carousel-control-prev" type="button" data-bs-target="#my"
                                                        data-bs-slide="prev">
                                                    <div className="icon">
                                                        <span aria-hidden="true" className="arrow_left_alt"></span>
                                                    </div>
                                                    <span className="visually-hidden">Previous</span>
                                                </button>

                                                <button className="carousel-control-next" type="button" data-bs-target="#my"
                                                        data-bs-slide="next">
                                                    <div className="icon">
                                                        <span aria-hidden="true" className="arrow_right_alt"></span>
                                                    </div>
                                                    <span className="visually-hidden">Next</span>
                                                </button>
                                            </div>
                                            <div className="item_filter_group justify-content-center mt-5">
                                                <div className="row">
                                                    <div className="col-lg-6">
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
                                                                <spam className="d-value">25 Km</spam>
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
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <h4></h4>
                                                        <ul style={{listStyle: "none", paddingLeft: "0"}}>
                                                            <li>
                                                                @if($car-=reverse_sensor == 1)
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use check"></i>
                                                                @else
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use close"></i>
                                                                @endif
                                                                Reverse sensor
                                                            </li>
                                                            <li>
                                                                @if($car=airConditioner == 1)
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use check"></i>
                                                                @else
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use close"></i>
                                                                @endif
                                                                Air Conditioner
                                                            </li>
                                                            <li>
                                                                @if($car=driverAirbag == 1)
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use check"></i>
                                                                @else
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use close"></i>
                                                                @endif
                                                                Driver Airbag
                                                            </li>
                                                            <li>
                                                                @if($car=cDPlayer == 1)
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use check"></i>
                                                                @else
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use close"></i>
                                                                @endif
                                                                CD Player
                                                            </li>
                                                            <li>
                                                                @if($car=brakeAssist == 1)
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use check"></i>
                                                                @else
                                                                    <i style={{color: "#199e1c", marginRight: "10px"}}
                                                                       className="fa fa-fw" aria-hidden="true"
                                                                       title="Copy to use close"></i>
                                                                @endif
                                                                Brake Assist
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mt-5 justify-content-center">
                                                <div className="col-lg-12 mb30">
                                                    <div className="item_filter_group">
                                                        <h4>Payment Method</h4>
                                                        <div className="row">
                                                            <div className="col-md-auto col-sm-auto ">
                                                                <div className="checkout__input__checkbox">
                                                                    <label for="payment">
                                                                        VN Pay
                                                                        <input name="desposit_type" type="radio" id="payment" value="VNPAY"/>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto col-sm">
                                                                <div className="checkout__input__checkbox">
                                                                    <label for="paypal">
                                                                        Paypal
                                                                        <input name="desposit_type" type="radio" id="paypal" value="PAYPAL"/>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto col-sm">
                                                                <div className="checkout__input__checkbox">
                                                                    <label for="momo">
                                                                        MoMo
                                                                        <input name="desposit_type" type="radio" id="momo" value="MOMO"/>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-auto col-sm">
                                                                <div className="checkout__input__checkbox">
                                                                    <label for="COD">
                                                                        COD
                                                                        <input name="desposit_type" type="radio" id="COD" value="COD"/>
                                                                        <span className="checkmark"></span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        @error("desposit_type")
                                                        <p className="text-danger"><i>Error</i></p>
                                                        @enderror
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card position-sticky top-0">
                                                <div className="p-3 bg-light bg-opacity-10">
                                                    <h6 className="card-title mb-3">Order Summary</h6>
                                                    <div className="d-flex justify-content-between mb-1 small">
                                                        @foreach($price as $i)
                                                        <span>Subtotal</span> <span id="subtotal" >$100</span>
                                                        @endforeach
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-1 small">
                                                        <span>Service</span> <span id="service">$0.00</span>
                                                    </div>

                                                    <br/>
                                                    <div className="d-flex justify-content-between mb-4 small">
                                                        @foreach($price as $i)
                                                        <span>TOTAL</span> <strong className="text-dark" id="total">$100</strong>
                                                        @endforeach
                                                    </div>
                                                    <div className="d-flex justify-content-between mb-4 small">
                                                        <span>DEPOSIT</span> <strong className="text-dark" id="deposit">$100</strong>
                                                    </div>
                                                    <div className="form-check mb-1 small">
                                                        <input className="form-check-input" type="checkbox" value="" id="tnc"/>
                                                        <label className="form-check-label" for="tnc">
                                                            I agree to the <a href="#">terms and conditions</a>
                                                        </label>
                                                    </div>
                                                    <div className="form-check mb-3 small">
                                                        <input className="form-check-input" type="checkbox" value="" id="subscribe"/>
                                                        <label className="form-check-label" for="subscribe">
                                                            Get emails about product updates and events. If you change your mind, you can unsubscribe at any time. <a href="#">Privacy Policy</a>
                                                        </label>
                                                    </div>
                                                    <input type="hidden" value="{{$car->desposit}}" id="desposit_amount" name="desposit_amount" />
                                                    <input type="hidden" value="" id="total_amount" name="total_amount" />

                                                    <button onclick="calculateTotal()" type="submit" className="btn btn-primary w-100 mt-2">Car Deposit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="spacer-single"></div>
        </section>
    </div>
    )
}