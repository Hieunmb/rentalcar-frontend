import { NavLink } from "react-router-dom";

function HomeCar(props){
    const ratings ={
        color:"#cecece",
        fontSize:"16px",
    }

    const ratingcolor ={
        color:"#fbc634 !important"
    }
    const car = props.car;
    return(
        <div className="col-lg-12">
                            <div className="de-item mb30">
                                <div className="d-img">
                                    <img src="../images/cars/16888121371.jpg" className="img-fluid" alt=""/>
                                </div>
                                <div className="d-info">
                                    <div className="d-text">
                                        <div style={{display: "flex"}} className="title-car">
                                            <h4 style={{textTransform: "capitalize",
                                                        height: "26px",
                                                        overflow: "hidden",
                                                        display: "block",
                                                        display: "-webkit-box",
                                                        webkitBoxOrient: "vertical",
                                                        webkitLineClamp: "1",
                                                        textOverflow: "ellipsis",
                                                        width: "65%"}}>KIA</h4>
                                            <div className="d-item_like">
                                                <div className="ratings" style={ratings}>
                                                    <i className="fa fa-star rating-color" style={ratingcolor}></i>
                                                    <i className="fa fa-star rating-color" style={ratingcolor}></i>
                                                    <i className="fa fa-star rating-color" style={ratingcolor}></i>
                                                    <i className="fa fa-star rating-color" style={ratingcolor}></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-atr-group">
                                            <span className="d-atr"><img src="images/icons/1.svg" alt=""/>4</span>
                                            <span className="d-atr"><img src="images/icons/2.svg" alt=""/>50</span>
                                            <span className="d-atr"><img src="images/icons/3.svg" alt=""/>200</span>
                                            <span className="d-atr"><img src="images/icons/4.svg" alt=""/></span>
                                        </div>
                                        <div className="d-price">
                                            Daily rate from <span></span>
                                            <NavLink className="btn-main" to={`/cardetail/${car.id}`}>Rent Now</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
    )
}
export default HomeCar;