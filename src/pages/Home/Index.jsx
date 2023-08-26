
// import 'bootstrap/dist/css/bootstrap.min.css';
import HEADER from '../../components/headerPage/header'

// import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'
// import Foter from '../../components/headerPage/footer'
import Listing from '../../components/Listing/Listing';
import Carcollection from '../../components/Carcollection/Carcollection';
import Contact from '../../components/Contact/Contact';
import { Footer } from '../../components/headerPage/footer';

//import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
 
  const isLoggedIn = localStorage.getItem('token') !== null;

  
  return (
    <div className="index">
      {/* {
        isLoggedIn? (" Login "): (" Login not ")
      } */}
      <HEADER />

      <Slider />

      <Listing />

      <Carcollection />

      <Contact />

      <Footer />

      {/* <Footer /> */}

    </div>
  )
}

export default Index