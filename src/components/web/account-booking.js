import BreadCrumb from "../layouts/breadcrumb"
export default function AccountBooking(){
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
                                    <img src="images/misc/avatar.jpg" alt=""/>
                                </div>
                                <div className="profile_name">
                                    <h4>
                                        Do Minh Duc
                                        <span className="profile_username text-gray">ducdm@gmail.com</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="spacer-20"></div>
                            <ul className="menu-col">
                                <li><a href=""><i className="fa fa-home"></i>Dashboard</a></li>
                                <li><a href=""><i className="fa fa-user"></i>My Profile</a></li>
                                <li><a href="" className="active"><i className="fa fa-calendar"></i>My Orders</a></li>
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

                        <div className="card p-4 rounded-5 mb25">
                            <h4 className="rounded-pill" style={{width: "180px",backgroundColor: "rgb(13,110,253)",color: "white",textAlign: "center"}}>Pending Orders</h4>
                            @if($pendingOrders=isEmpty())
                                <p className="text-center" style={{marginTop: "20px"}}>If there is an order in this status, it will be displayed here!</p>
                            @else
                            <table className="table de-table">
                                <thead>
                                <tr>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">ID</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Total Amount</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pay</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">View</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div className="badge bg-gray-100 text-dark">#1</div></td>
                                        <td><span className="bold">SUV</span></td>
                                        <td>Hanoi</td>
                                        <td>09/10/2023</td>
                                        <td>09/10/2023</td>
                                        <td>$100</td>
                                        <td>
                                            @if($order=is_rent_paid)
                                                <span className="badge bg-success">Pain</span>
                                            @else
                                                <span className="badge bg-danger">UnPain</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="#" className="badge bg-info">View</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="card p-4 rounded-5 mb25">
                            <h4 className="rounded-pill" style={{width: "180px",backgroundColor: "rgb(13,110,253)",color: "white",textAlign: "center"}}>Confirmed Orders</h4>
                            @if($confirmedOrders=isEmpty())
                                <p className="text-center" style={{marginTop: "20px"}}>If there is an order in this status, it will be displayed here!</p>
                            @else
                            <table className="table de-table">
                                <thead>
                                <tr>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">ID</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Total Amount</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pay</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">View</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div className="badge bg-gray-100 text-dark">#1</div></td>
                                        <td><span className="bold">SUV</span></td>
                                        <td>Hanoi</td>
                                        <td>09/10/2023</td>
                                        <td>09/10/2023</td>
                                        <td>$100</td>
                                        <td>
                                            @if($order=is_rent_paid)
                                                <span className="badge bg-success">Pain</span>
                                            @else
                                                <span className="badge bg-danger">UnPain</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="" className="badge bg-info">View</a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            @endif
                        </div>

                        <div className="card p-4 rounded-5 mb25">
                            <h4 className="rounded-pill" style={{width: "180px",backgroundColor: "rgb(13,110,253)",color: "white",textAlign: "center"}}>Delivery Orders</h4>
                            @if($deliveryOrders=isEmpty())
                                <p className="text-center" style={{marginTop: "20px"}}>If there is an order in this status, it will be displayed here!</p>
                            @else
                                <table className="table de-table">
                                    <thead>
                                    <tr>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">ID</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Date</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">Total Amount</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">Pay</span></th>
                                        <th scope="col"><span className="text-uppercase fs-12 text-gray">View</span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><div className="badge bg-gray-100 text-dark">#1</div></td>
                                            <td><span className="bold">SUV</span></td>
                                            <td>Hanoi</td>
                                            <td>09/10/2023</td>
                                            <td>09/10/2023</td>
                                            <td>$100</td>
                                            <td>
                                                @if($order=is_rent_paid)
                                                    <span className="badge bg-success">Pain</span>
                                                @else
                                                    <span className="badge bg-danger">UnPain</span>
                                                @endif
                                            </td>
                                            <td>
                                                <a href="" className="badge bg-info">View</a>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            @endif
                        </div>
                        <div className="card p-4 rounded-5 mb25">
                            <h4 className="rounded-pill" style={{width: "180px",backgroundColor: "rgb(255,192,8)",color: "white",textAlign: "center"}}>Renting Orders</h4>
                            @if($inProgress=isEmpty())
                                <p className="text-center" style={{marginTop: "20px"}}>If there is an order in this status, it will be displayed here!</p>
                            @else
                            <table className="table de-table">
                                <thead>
                                <tr>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">ID</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Total Amount</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pay</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">View</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($inProgress as $order)
                                    <tr>
                                        <td><div className="badge bg-gray-100 text-dark">#1</div></td>
                                        <td><span className="bold">SUV</span></td>
                                        <td>Hanoi</td>
                                        <td>09/10/2023</td>
                                        <td>09/10/2023</td>
                                        <td>$100</td>
                                        <td>
                                            @if($order=is_rent_paid)
                                                <span className="badge bg-success">Pain</span>
                                            @else
                                                <span className="badge bg-danger">UnPain</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="" className="badge bg-info">View</a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            @endif
                        </div>


                        <div className="card p-4 rounded-5 mb25">
                            <h4 className="rounded-pill" style={{width: "180px",backgroundColor: "rgb(25,135,84)",color: "white",textAlign: "center"}}>Completed Orders</h4>
                            @if($completedOrders=isEmpty())
                                <p className="text-center" style={{marginTop: "20px"}}>If there is an order in this status, it will be displayed here!</p>
                            @else
                            <table className="table de-table">
                                <thead>
                                <tr>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">ID</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Total Amount</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pay</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">View</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($completedOrders as $order)
                                    <tr>
                                        <td><div className="badge bg-gray-100 text-dark">#1</div></td>
                                        <td><span className="bold">SUV</span></td>
                                        <td>Hanoi</td>
                                        <td>09/10/2023</td>
                                        <td>09/10/2023</td>
                                        <td>$100</td>
                                        <td>
                                            @if($order=is_rent_paid)
                                                <span className="badge bg-success">Pain</span>
                                            @else
                                                <span className="badge bg-danger">UnPain</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="" className="badge bg-info">View</a>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                            @endif
                        </div>


                        <div className="card p-4 rounded-5 mb25">
                            <h4 className="rounded-pill" style={{width: "180px",backgroundColor: "rgb(220,53,69)",color: "white",textAlign: "center"}}>Cancel Orders</h4>
                            @if($cancelledOrders=isEmpty())
                                <p className="text-center" style={{marginTop: "20px"}}>If there is an order in this status, it will be displayed here!</p>
                            @else
                            <table className="table de-table">
                                <thead>
                                <tr>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">ID</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Total Amount</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pay</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">View</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><div className="badge bg-gray-100 text-dark">#1</div></td>
                                        <td><span className="bold">SUV</span></td>
                                        <td>Hanoi</td>
                                        <td>09/10/2023</td>
                                        <td>09/10/2023</td>
                                        <td>$100</td>
                                        <td>
                                            @if($order=is_rent_paid)
                                                <span className="badge bg-success">Pain</span>
                                            @else
                                                <span className="badge bg-danger">UnPain</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="" className="badge bg-info">View</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        </section>
        <a href="#" id="back-to-top"></a>
    </div>
    )
}