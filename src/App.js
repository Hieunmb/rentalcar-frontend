import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import BreadCrumb from './components/layouts/breadcrumb';
import Contact from './components/web/contact';
import Home from './components/web/home';
import Footer from './components/layouts/footer';
import AboutUs from './components/web/aboutus';
import AccountBooking from './components/web/account-booking';
import AccountDashBoard from './components/web/account-dashboard';
import AccountFavouriteCars from './components/web/account-favourite-cars';
import AccountProfile from './components/web/account-profile';
import AccountProfileLicenses from './components/web/account-profile-licenses';
import BackToTop from './components/layouts/backtotop';
import Booking from './components/web/booking';
import CarDetail from './components/web/car-detail';
import CarFilter from './components/web/car-filter';
import CarSearch from './components/web/car-search';
import Invoice from './components/web/invoice';
import ReceiveCar from './components/web/receiveCar';
import Review from './components/web/review';

function App() {
  return (
    <div className="App">
      <Header/>
      <Review/>
      <BackToTop/>
      <Footer/>
    </div>
  );
}

export default App;
