import BreadCrumb from "../layouts/breadcrumb"

export default function Invoice(){
    return(
    
    <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <BreadCrumb/>


        <section id="section-settings" className="bg-gray-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mb30">
                        <div className="card p-4 rounded-5">
                            <div className="profile_avatar">
                                <div className="profile_img">
                                    <img src="images/misc/avatar.jpg" alt=""/>
                                </div>
                                <div className="profile_name">
                                    <h4>
                                        Nguyen Bui Minh Hieu
                                        <span className="profile_username text-gray">hieunbm@gmail.com</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="spacer-20"></div>
                            <ul className="menu-col">
                                <li><a href="" className="active"><i className="fa fa-home"></i>Dashboard</a></li>
                                <li><a href=""><i className="fa fa-user"></i>My Profile</a></li>
                                <li><a href=""><i className="fa fa-calendar"></i>My Orders</a></li>
                                <li><a href=""><i className="fa fa-heart"></i>My Favorite Cars</a></li>
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
                        <div className="card">
                            <div className="card-body">
                                <div className="container mb-3 mt-3">
                                    <div className="row d-flex align-items-baseline">
                                        <div className="col-xl-9">
                                            <p style={{color: "#7e8d9f",fontSize: "20px",textAlign:"left",width:"200px"}}>Invoice &gt;&gt; <strong>ID:
                                                    #1</strong></p>
                                        </div>
                                    </div>
                                    <div className="container">
                                        <div className="col-md-12">
                                            <div className="text-center">
                                                <div id="logo">
                                                    <a href="index.html">
                                                        <img className="logo-2"src="images/logo.png" alt=""/>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-8">
                                                <ul className="list-unstyled" style={{textAlign:"left"}}>
                                                    <li className="text-muted">To: <span style={{color:"#8f8061"}}>Hieu</span>
                                                    </li>
                                                        <li className="text-muted">Address: 8 Ton That Thuyet</li>
                                                    <li className="text-muted"><i className="fas fa-phone"></i>0964958450</li>
                                                </ul>
                                            </div>
                                            <div className="col-xl-4">
                                                <ul className="list-unstyled">
                                                    <li className="text-muted">
                                                        <i className="fas fa-circle" style={{color:"#8f8061"}}></i>
                                                        <span className="fw-bold">Creation Date: </span>10/10/2023
                                                    </li>
                                                    <li className="text-muted">
                                                        <i className="fas fa-circle" style={{color:"#8f8061"}}></i>
                                                        <span className="me-1 fw-bold">Status:</span>
                                                             <span
                                                                className="badge bg-dark text-white fw-bold">Pending</span>
                                                             <span
                                                                className="badge bg-info text-black fw-bold">Confirmed</span>
                                                        <span
                                                                className="badge bg-info text-black fw-bold">Delivery</span>
                                                             <span
                                                                className="badge bg-warning text-black fw-bold">In Progress</span>
                                                             <span
                                                                className="badge bg-warning text-black fw-bold">Processing</span>
                                                             <span
                                                                className="badge bg-success text-black fw-bold">Completed</span>
                                                             <span
                                                                className="badge bg-danger text-black fw-bold">Cancel</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row my-2 mx-1 justify-content-center">
                                                <div className="col-md-2 mb-4 mb-md-0">
                                                    <div className="bg-image ripple rounded-5 mb-4 overflow-hidden d-block" data-ripple-color="light">
                                                        <img
                                                            src="images/cars/Audi R7 1.jpg"
                                                            className="w-100" height="100px" alt="Elegant shoes and shirt"/>
                                                        <a href="#">
                                                            <div className="hover-overlay">
                                                                <div className="mask" style={{backgroundColor: "hsla(0, 0%, 98.4%, 0.2)"}}>

                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="col-md-7 mb-4 mb-md-0">
                                                    <p className="fw-bold">KIA</p>
                                                    <p className="mb-1">
                                                        <span className="text-muted me-2">Seats:</span><span>4</span>
                                                    </p>
                                                    <p>
                                                        <span className="text-muted me-2">License Plate:</span><span>29-E2 91740</span>
                                                    </p>
                                                </div>
                                                <div className="col-md-3 mb-4 mb-md-0">
                                                    <h5 className="mb-2">
                                                        <span className="align-middle">$ 50 /Day</span>
                                                    </h5>

                                                </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="col-xl-3">
                                                <p className="fw-semibold text-muted mb-1">Invoice ID :</p>
                                                <p className="fs-15 mb-1">1</p></div>
                                            <div className="col-xl-3">
                                                <p className="fw-semibold text-muted mb-1">Rental Date :</p>
                                                <p className="fs-15 mb-1">10/10/2023</p>
                                            </div>
                                            <div className="col-xl-3">
                                                <p className="fw-semibold text-muted mb-1">Return Date :</p>
                                                <p className="fs-15 mb-1">11/10/2023</p></div>
                                            <div className="col-xl-3">
                                                <p className="fw-semibold text-muted mb-1">Due Amount :</p>
                                                <p className="fs-16 mb-1 fw-semibold">$100</p>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="row">
                                                <h6 className="col-12" style={{textAlign: "center"}}>
                                                    SERVICE INFORMATION
                                                </h6>
                                                <div className="col-xl-3"></div>
                                                <div className="col-xl-6 table-responsive">
                                                        <table className="table nowrap text-nowrap border mt-4">
                                                            <thead>
                                                            <tr>
                                                                <th>SERVICE</th>
                                                                <th>PRICE</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>KIA</td>
                                                                    <td>100</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <p style={{textAlign: "center"}}>Do not use the service</p>
                                                </div>
                                                <div className="col-xl-3"></div>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <h6 className="col-12" style={{textAlign: "center"}}>
                                                ADDITIONAL COSTS
                                            </h6>
                                            <div className="col-xl-3"></div>
                                            <div className="col-xl-6 table-responsive">
                                                    <table className="table nowrap text-nowrap border mt-4">
                                                        <thead>
                                                        <tr>
                                                            <th>TITLE</th>
                                                            <th>EXPENSE</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>KIA</td>
                                                                <td>100</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <p style={{textAlign: "center"}}>No extra costs</p>
                                            </div>
                                            <div className="col-xl-3"></div>
                                        </div>
                                        <div className="row mb-5">
                                            <div className="table-responsive">
                                                <table className="table nowrap text-nowrap border mt-4">
                                                    <thead>
                                                    <tr>
                                                        <th>PICKUP LOCATION</th>
                                                        <th>DAYS(HOURS)</th>
                                                        <th>RENTAL TYPE</th>
                                                        <th>CAR PRICE</th>
                                                        <th>SUBTOTAL</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr>
                                                        <td>Hanoi</td>
                                                        <td>Good</td>
                                                        <td>Auto</td>
                                                        <td>100</td>
                                                        <td> $150</td>
                                                    <tr>
                                                        <td colspan="3"></td>
                                                        <td colspan="3">
                                                            <table className="table table-sm text-nowrap mb-0 table-borderless">
                                                                <tbody>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Deposit Status :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">
                                                                                <span className="badge bg-success">Pain</span>
                                                                                <span className="badge bg-danger">UnPain</span>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Pay rent Status :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">
                                                                                <span className="badge bg-success">Pain</span>
                                                                                <span className="badge bg-danger">UnPain</span>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Car Return Status :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">
                                                                                <span className="badge bg-success">Pain</span>
                                                                                <span className="badge bg-danger">UnPain</span>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Return the deposit :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">
                                                                                <span className="badge bg-success">Pain</span>
                                                                                <span className="badge bg-danger">UnPain</span>
                                                                        </p>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Sub Total :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">$150</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Service Total :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">$100</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0">Additional costs Total :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-15">$250</p></td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row"><p className="mb-0 fs-14">Total :</p></th>
                                                                    <td><p className="mb-0 fw-semibold fs-16 text-success">$500</p>
                                                                    </td>
                                                                </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="row mb-5">
                                                <p className="mt-5 ml10"><strong>Message:</strong> Error</p>
                                        </div>
                                                    <a href="" className="btn btn-danger float-right">
                                                        <i className="far fa-credit-card"></i>
                                                        Cancel
                                                    </a>
                                                    <a href="" className="btn btn-success float-right">
                                                        <i className="far fa-credit-card"></i>
                                                        Receive Car
                                                    </a>
                                                    <a href="" className="btn btn-success float-right">
                                                        <i className="far fa-credit-card"></i>
                                                        Review Car
                                                    </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}