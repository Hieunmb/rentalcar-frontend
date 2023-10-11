export default function Cars(){
    return(
    <div className="col-lg-12">
        <div className="de-item-list mb30">
            <div className="d-img">
                <img src="{{$c=thumbnail}}" className="img-fluid" alt=""/>
            </div>
            <div className="d-info">
                <div className="d-text">
                    <div style={{display: "flex"}}>
                        <h4>KIA</h4>
                        <div className="d-item_like" style={{backgroundSize: "100%", backgroundRepeat: "no-repeat", marginLeft: "10px"}}>
                            <a href=""><i className="fa fa-heart"></i></a>
                        </div>
                    </div>
                    <div className="d-atr-group">
                        <ul className="d-atr">
                            <li><span>Model Year:</span>2023</li>
                            <li><span>Seats:</span>4</li>
                            <li><span>Transmission:</span>Auto</li>
                            <li><span>Fuel:</span>Oil</li>
                                <li>Reverse sensor<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>Reverse sensor<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>Air Conditioner<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>Air Conditioner<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>CD Player<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>CD Player<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>Brake Assist<i className="fa fa-check" style={{color: "#199e1c", marginLeft: "5px"}} aria-hidden="true"></i></li>
                                <li>Brake Assist<i className="fa fa-times" style={{marginLeft: "5px"}} aria-hidden="true"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="d-price">
                <div style={{marginBottom: "15px"}}
                     className="d-flex justify-content-between align-items-center">
                    <div className="ratings">
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                            <i className="fa fa-star rating-color"></i>
                    </div>
                    <h5 className="review-count">4 Reviews</h5>
                </div>
                <div style={{marginBottom: "25px"}}>
                    Daily rate from <span>100</span>
                    <a className="btn-main" href="">Rent Now</a>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
    )
}