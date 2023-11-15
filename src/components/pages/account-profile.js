import BreadCrumb from "../layouts/breadcrumb"

export default function AccountProfile(){
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
                                        Nguyen Bui Minh Hieu
                                        <span className="profile_username text-gray">hieunbm@gmail.com</span>
                                    </h4>
                                </div>
                            </div>
                            <div className="spacer-20"></div>
                            <ul className="menu-col">
                                <li><a href=""><i className="fa fa-home"></i>Dashboard</a></li>
                                <li><a href="" className="active"><i className="fa fa-user"></i>My Profile</a></li>
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
                        <div className="card p-4  rounded-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form id="form-create-item" className="form-border" method="post" action="" enctype="multipart/form-data">
                                        <div className="de_tab tab_simple">

                                            <ul className="menu-content">
                                                <li className="menu-content-profile"><h4>Profile</h4></li>
                                                <li className="menu-content-licenses"><h4><a href="">Driving license</a></h4></li>
                                                <span className="text-danger">Bla</span>
                                            </ul>

                                                <div className="col-lg-6 mb20">
                                                    <div className="alert alert-success">
                                                        <span className="close-icon"><i className="fa-solid fa-xmark"></i></span>
                                                    </div>
                                                </div>
                                            <div className="de_tab_content">
                                                <div className="tab-1">
                                                    <div className="row">
                                                        <div className="col-lg-6 mb20">
                                                            <h5>Username</h5>
                                                            <input type="text" name="name" value="{{$user->name}}"  className="form-control"/>
                                                        </div>
                                                        <div className="col-lg-6 mb20">
                                                            <h5>Email Address
                                                                <span className="text-danger">Bla</span>
                                                                </h5>
                                                            <input type="text" name="email" value="{{$user->email}}" className="form-control"/>
                                                        </div>
                                                        <div className="col-md-6 mb20">
                                                            <h5>Phone Number
                                                                <span className="text-danger">Bla</span>
                                                            </h5>
                                                            <input type="text" name="phone" value="{{$user->phone}}" className="form-control"/>
                                                        </div>
                                                        <div className="col-lg-6 mb20">
                                                            <h5>Old Password
                                                                <span className="text-danger">Bla</span>
                                                            </h5>
                                                            <input type="password" name="old_password" id="old_password" className="form-control" placeholder="********" value="{{ old('old_password') }}"/>
                                                            <i className="fa-solid fa-eye" id="toggle-old-password" onclick="togglePasswordVisibility('old_password', 'toggle-old-password')"></i>
                                                        </div>
                                                        <div className="col-lg-6 mb20">
                                                            <h5>New Password
                                                                <span className="text-danger">Bla</span>
                                                                </h5>
                                                            <input type="password" name="new_password" id="new_password" className="form-control" placeholder="********" value="{{ old('new_password') }}"/>
                                                            <i className="fa-solid fa-eye" id="toggle-new-password" onclick="togglePasswordVisibility('new_password', 'toggle-new-password')"></i>
                                                        </div>
                                                        <div className="col-lg-6 mb20">
                                                            <h5>Re-enter New Password
                                                                <span className="text-danger">Bla</span>
                                                            </h5>
                                                            <input type="password" name="new_password_confirmation" id="new_password_confirmation" className="form-control" placeholder="********"/>
                                                            <i className="fa-solid fa-eye" id="toggle-confirm-password" onclick="togglePasswordVisibility('new_password_confirmation', 'toggle-confirm-password')"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" className="btn-main">Update profile</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <a href="#" id="back-to-top"></a>
    </div>
    
    )
}