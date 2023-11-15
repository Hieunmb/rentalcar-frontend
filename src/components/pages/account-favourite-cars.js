import BreadCrumb from "../layouts/breadcrumb"

export default function AccountFavouriteCars(){
    return(
        <div className="no-bottom no-top zebra" id="content">
        <div id="top"></div>
        <BreadCrumb/>
            <section id="section-settings" className="bg-gray-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 mb30">
                            <div className="card p-4 rounded-5">
                                <div className="profile_avatar">
                                    <div className="profile_img">
                                        <img src="images/profile/1.jpg" alt=""/>
                                    </div>
                                    <div className="profile_name">
                                        <h4>
                                            Monica Lucas
                                            <span className="profile_username text-gray">monica@rentaly.com</span>
                                        </h4>
                                    </div>
                                </div>
                                <div className="spacer-20"></div>
                                <ul className="menu-col">
                                    <li><a href=""><i className="fa fa-home"></i>Dashboard</a></li>
                                    <li><a href=""><i className="fa fa-user"></i>My Profile</a></li>
                                    <li><a href=""><i className="fa fa-calendar"></i>My Orders</a></li>
                                    <li><a href="" className="active"><i className="fa fa-heart"></i>My Favorite Cars</a></li>
                                    <li>
                                        <form action="" method="post">
                                            <button style={{border: "none", backgroundColor: "white", width: "100%",textAlign: "left",marginLeft: "5px"}}
                                                    className="menu-item" type="submit"><i className="fa fa-sign-out"></i>Sign out
                                            </button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                            <div className="col-lg-9">
                                @foreach($cars as $c)
                                <div className="de-item-list no-border mb30">
                                    <div className="d-img">
                                        <img src="{{$c->thumbnail}}" className="img-fluid" alt=""/>
                                    </div>
                                    <div className="d-info">
                                        <div className="d-text">
                                            <h4>SUV</h4>
                                            <div className="d-atr-group">
                                                <ul className="d-atr">
                                                    <li><span>Model Year:</span>2004</li>
                                                    <li><span>Seats:</span>4</li>
                                                    <li><span>Transmission:</span>Auto</li>
                                                    <li><span>Fuel:</span>Oil</li>
                                                    @if($c=reverse_sensor)
                                                        <li>Reverse sensor<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @else
                                                        <li>Reverse sensor<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @endif
                                                    @if($c=airConditioner)
                                                        <li>Air Conditioner<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @else
                                                        <li>Air Conditioner<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @endif
                                                    @if($c=cDPlayer)
                                                        <li>CD Player<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}}aria-hidden="true"></i></li>
                                                    @else
                                                        <li>CD Player<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @endif
                                                    @if($c=brakeAssist)
                                                        <li>Brake Assist<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @else
                                                        <li>Brake Assist<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                                    @endif
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-price">
                                        <div style={{marginTop: "-30px", marginBottom: "10px"}}>
                                            <a style={{marginLeft: "200px", fontSize: "30px"}} href=""><i className="icon_close"></i></a>
                                        </div>
                                        <div>
                                            Daily rate from <span>100</span>
                                            <a className="btn-main" href="">Rent Now</a>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                    </div>
                </div>
            </section>
            <a href="#" id="back-to-top"></a>
    </div>
    )
}