import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/header';
import BreadCrumb from './components/layouts/breadcrumb';
import Contact from './components/web/contact';
import Home from './components/web/home';
import Footer from './components/layouts/footer';
import AboutUs from './components/web/aboutus';

function App() {
  return (
    <div className="App">
      <Header/>
      <AboutUs/>
    </div>
  );
}

export default App;
