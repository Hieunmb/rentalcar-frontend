import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import BreadCrumb from './components/layouts/breadcrumb';
import Contact from './components/pages/contact';
import Home from './components/pages/home';
import Footer from './components/layouts/footer';
import AboutUs from './components/pages/aboutus';
import AccountBooking from './components/pages/account-booking';
import AccountDashBoard from './components/pages/account-dashboard';
import AccountFavouriteCars from './components/pages/account-favourite-cars';
import AccountProfile from './components/pages/account-profile';
import AccountProfileLicenses from './components/pages/account-profile-licenses';
import BackToTop from './components/layouts/backtotop';
import Booking from './components/pages/booking';
import CarDetail from './components/pages/car-detail';
import CarFilter from './components/pages/car-filter';
import CarSearch from './components/pages/car-search';
import Invoice from './components/pages/invoice';
import ReceiveCar from './components/pages/receiveCar';
import Review from './components/pages/review';
import {  BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useJwt } from 'react-jwt';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Cars from './components/layouts/cars';


function App() {
  const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (!token || isExpired || isInvalid) {
        localStorage.removeItem("accessToken");
        return <Navigate to="/login" />;
    }

    return element;
};

const ProtectedLoginRoute = ({ element }) => {
    const token = localStorage.getItem("accessToken");
    const { isExpired, isInvalid } = useJwt(token);

    if (token && !isExpired && !isInvalid) {
        return <Navigate to="/" />;
    }

    return element;
};
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path="/" element={<ProtectedRoute element={<Home />} />} />
      <Route path="/login" element={<ProtectedLoginRoute element={<Login />} />} />
      <Route path="/register" element={<ProtectedLoginRoute element={<Register />} />} />
      <Route path='/cardetail/:id' element={<ProtectedRoute element={<CarDetail />}/>} />
      </Routes>
      <BackToTop/>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
