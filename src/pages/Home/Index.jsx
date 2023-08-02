
// import 'bootstrap/dist/css/bootstrap.min.css';
import HEADER from '../../components/headerPage/header'

import Footer from '../../components/Footer/Footer'
import Slider from '../../components/Slider/Slider'
// import Foter from '../../components/headerPage/footer'

//import 'bootstrap/dist/css/bootstrap.min.css';

function Index() {
  return (
   <div className="index">
    <HEADER />

    <Slider />

    <Footer /> 
    {/* <Foter /> */}
   </div>
  )
}

export default Index