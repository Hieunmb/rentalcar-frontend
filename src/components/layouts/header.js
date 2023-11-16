import { useEffect, useState } from "react";
import { useJwt } from "react-jwt";
import { Link, useNavigate } from "react-router-dom";
export default function Header(){
    const [cusname, setCusName] = useState("");
    const [studentName, setStudentName] = useState("");
    const [studentCode, setStudentCode] = useState("");
    const [classId, setClassId] = useState("");
    const { isExpired, isInvalid } = useJwt();

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        try {
            const decodedToken = JSON.parse(atob(token.split(".")[1]));

            // Get the info student from token
            const studentName = decodedToken["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
            const studentCode = decodedToken["Student-Code"];
            const classId = decodedToken["Class-Id"];
            
            setCusName(cusname);
            setStudentName(studentName);
            setStudentCode(studentCode);
            setClassId(classId);
        } catch (error) {}
    }, [isExpired, isInvalid]);

    const handleLogout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };
    const logout= {
        border: "none",
        backgroundColor: "white",
         width: "100%",
         display:"none"
      }
    return (
        <header className="transparent scroll-light has-topbar">
    <div id="topbar" className="topbar-dark text-light">
        <div className="container">
            <div className="topbar-left xs-hide">
                <div className="topbar-widget">
                    <div className="topbar-widget"><a href="#"><i className="fa fa-phone"></i>+84 964958450</a></div>
                    <div className="topbar-widget"><a href="#"><i className="fa fa-envelope"></i>hieunbmth2203011@fpt.edu.vn</a></div>
                    <div className="topbar-widget"><a href="#"><i className="fa fa-clock-o"></i>Mon - Fri 08.00 - 18.00</a>
                    </div>
                </div>
            </div>

            <div className="topbar-right">
                <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                    <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                    <a href="#"><i className="fa fa-youtube fa-lg"></i></a>
                    <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
                    <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                </div>
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="de-flex sm-pt10">
                    <div className="de-flex-col">
                        <div className="de-flex-col">
                            <div id="logo">
                                <a href="/">
                                <img className="logo-1" src="images/logo-light.png" alt=""/>
                                    <img className="logo-2" src="images/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="de-flex-col header-col-mid">
                        <ul id="mainmenu">
                            
                        </ul>
                    </div>
                    <div className="de-flex-col">
                        <div className="menu_side_area">
                        <ul id="mainmenu">
                                    <li><a href=""><i className="fa fa-user"></i> {cusname}</a>
                                        <ul>
                                            <li><a className="menu-item" href="">Dashboard</a>
                                            </li>
                                            <li><a className="menu-item" href="">My Profile</a>
                                            </li>
                                            <li><a className="menu-item" href="">My Orders</a>
                                            </li>
                                            <li><a className="menu-item" href="">My Favorite Cars</a>
                                            </li>
                                            <li>
                                                <form action="" method="post">
                                                    <button style={logout} onClick={handleLogout}
                                                            className="menu-item" type="submit"><i
                                                            className="fa fa-arrow-right"></i>Logout
                                                    </button>
                                                </form>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>

    );
}