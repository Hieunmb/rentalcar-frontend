import BreadCrumb from "../layouts/breadcrumb"

export default function AccountDashBoard(){
    return(
    <div className="no-bottom no-top zebra" id="content">
        <div id="top"></div>

        <BreadCrumb/>
        <section id="section-cars" className="bg-gray-100">
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
                                        Nguyễn Bùi Minh Hiếu
                                        <span className="profile_username text-gray">ducdm@gmail.com</span>
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
                        <div className="row">
                            <div className="col-lg-4 col-6 mb25 order-sm-1">
                                <div className="card p-4 rounded-5">
                                    <div className="symbol mb40">
                                        <i className="fa id-color fa-2x fa-calendar-check-o"></i>
                                    </div>
                                    <span className="h1 mb0">1</span>
                                    <span className="text-gray">Upcoming Orders</span>
                                </div>
                            </div>


                            <div className="col-lg-4 col-6 mb25 order-sm-1">
                                <div className="card p-4 rounded-5">
                                    <div className="symbol mb40">
                                        <i className="fa id-color fa-2x fa-calendar"></i>
                                    </div>
                                    <span className="h1 mb0">2</span>
                                    <span className="text-gray">Total Orders</span>
                                </div>
                            </div>

                            <div className="col-lg-4 col-6 mb25 order-sm-1">
                                <div className="card p-4 rounded-5">
                                    <div className="symbol mb40">
                                        <i className="fa id-color fa-2x fa-calendar-times-o"></i>
                                    </div>
                                    <span className="h1 mb0">1</span>
                                    <span className="text-gray">Cancel Orders</span>
                                </div>
                            </div>
                        </div>

                        <div className="card p-4 rounded-5 mb25">
                            <h4>My Recent Orders</h4>

                            <table className="table de-table">
                                <thead>
                                <tr>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Order ID</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Car Name</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Pick Up Location</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Rental Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Return Date</span></th>
                                    <th scope="col"><span className="text-uppercase fs-12 text-gray">Status</span></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><span className="d-lg-none d-sm-block">Order ID</span><div className="badge bg-gray-100 text-dark">1</div></td>
                                    <td><span className="d-lg-none d-sm-block">Car Name</span><span className="bold">SUV</span></td>
                                    <td><span className="d-lg-none d-sm-block">Pick Up Location</span>Hanoi</td>
                                    <td><span className="d-lg-none d-sm-block">Rental Date</span>09/10/2023</td>
                                    <td><span className="d-lg-none d-sm-block">Return Date</span>09/10/2023</td>
                                    <td>@switch($us=status)
                                            @case(0)<div className="badge rounded-pill bg-warning">scheduled</div>@break
                                            @case(1)<div className="badge rounded-pill bg-success">completed</div>@break
                                            @case(2)<div className="badge rounded-pill bg-danger">cancelled</div>@break</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ms-auto float-end">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <a href="#" id="back-to-top"></a>
    </div>

    )
}