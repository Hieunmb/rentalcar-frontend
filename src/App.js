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

function App() {
  return (
    <div className="App">
      <Header/>
      <AccountDashBoard/>
    </div>
  );
}

export default App;
