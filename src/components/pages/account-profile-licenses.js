import BreadCrumb from "../layouts/breadcrumb"

export default function AccountProfileLicenses(){
    return(
    <div class="no-bottom no-top zebra" id="content">
        <div id="top"></div>

        
        <BreadCrumb/>

        <section id="section-settings" class="bg-gray-100">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 mb30">
                        <div class="card p-4 rounded-5">
                            <div class="profile_avatar">
                                <div class="profile_img">
                                    <img src="images/misc/avatar.jpg" alt=""/>
                                </div>
                                <div class="profile_name">
                                    <h4>
                                        Nguyen Bui Minh Hieu
                                        <span class="profile_username text-gray">hieunbm@gmail.com</span>
                                    </h4>
                                </div>
                            </div>
                            <div class="spacer-20"></div>
                            <ul class="menu-col">
                                <li><a href=""><i class="fa fa-home"></i>Dashboard</a></li>
                                <li><a href="" class="active"><i class="fa fa-user"></i>My Profile</a></li>
                                <li><a href=""><i class="fa fa-calendar"></i>My Orders</a></li>
                                <li>
                                    <form action="" method="post">
                                        <button style={{border: "none", backgroundColor: "white", width: "100%",textAlign: "left",marginLeft: "5px"}}
                                                class="menu-item" type="submit"><i class="fa fa-sign-out"></i>Sign out
                                        </button>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-9">
                        <div class="card p-4  rounded-5">
                            <div class="row">
                                <div class="col-lg-12">
                                    <form id="form-create-item" class="form-border" method="post" action="" enctype="multipart/form-data">
                                        <div class="de_tab tab_simple">
                                                <ul class="menu-content">
                                                    <li class="menu-content-profile"><h4><a href="">Profile</a></h4></li>
                                                    <li class="menu-content-licenses"><h4>Driving license</h4></li>
                                                @switch ($user=status)
                                                    @case(0)<span class="badge bg-warning">Unconfirmed</span>@break
                                                    @case(1)<span class="badge bg-info">Awaiting Confirmation</span>@break
                                                    @case(2)<span class="badge bg-success">Verified</span>@break
                                                    @case(3)<span class="badge bg-danger">Invalid (Please re-verify)</span>@break
                                                @endswitch
                                                </ul>

                                            <input type="hidden" id="status" name="status" value="paid" />

                                                    <div class="alert alert-success">
                                                        <span class="close-icon"><i class="fa-solid fa-xmark"></i></span>
                                                    </div>

                                            <div class="de_tab_content">
                                                <div class="tab-1">
                                                    <div class="row">
                                                        <div class="col-lg-6 mb20">
                                                            <h5>First and Last Name
                                                                <span style={{color: "#ACACAC",fontSize:"12px"}}>( Enter the same name as on the driver's license )</span></h5>
                                                            <input type="text" name="name" value="Nguyen Bui Minh Hieu" class="form-control" placeholder="Enter username" />
                                                        </div>
                                                        <div class="col-md-6 mb20">
                                                            <h5>License Number
                                                                <span class="text-danger">Bla</span>
                                                            </h5>
                                                            <input type="text" name="license_number" class="form-control" placeholder="Enter your driver's license number" value="29-E2 91740"/>
                                                        </div>
                                                        <div class="col-md-6 mb20">
                                                            <h5>Issue Date
                                                                <span class="text-danger">Bla</span>
                                                            </h5>
                                                            <input type="date" name="issue_date" class="form-control" value="{{ old('issue_date') }}"/>
                                                        </div>
                                                        <div class="col-md-6 mb20">
                                                            <h5>Expiration Date
                                                                    <span class="text-danger">10/10/2023</span>
                                                            </h5>
                                                            <input type="date" name="expiration_date" class="form-control" value="{{ old('expiration_date') }}"/>
                                                        </div>
                                                        <div class="col-md-6 mb20">
                                                            <h5>License Front
                                                                <span class="text-danger">Bla</span>
                                                            </h5>
                                                            <label for="input-file-front" class="custom-file-upload">
                                                                <div class="license-image-container">
                                                                    <img id="license-front-image" />
                                                                    <p class="upload-license">Upload license photo</p>
                                                                </div>
                                                            </label>
                                                            <input type="file" name="thumbnail_1" id="input-file-front" class="license-image form-control" onchange="handleFileSelect('input-file-front', 'license-front-image')"/>
                                                        </div>
                                                        <div class="col-md-6 mb20">
                                                            <h5>License Back
                                                                <span class="text-danger">Bla</span>
                                                            </h5>
                                                            <label for="input-file-back" class="custom-file-upload">
                                                                <div class="license-image-container">
                                                                    <img id="license-back-image" />
                                                                    <p class="upload-license">Upload license photo</p>
                                                                </div>
                                                            </label>
                                                            <input type="file" name="thumbnail_2" id="input-file-back" class="license-image form-control" onchange="handleFileSelect('input-file-back', 'license-back-image')"/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" id="submit" class="btn-main" onclick="return confirmFormSubmission()">Update</button>
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