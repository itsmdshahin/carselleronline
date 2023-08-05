import { FaAngleRight, FaStar } from "react-icons/fa"
import { Footer } from "../../components/headerPage/footer"
import Header from "../../components/headerPage/header"
import './buyer.scss';

 
const buyer = () => {
  return (
   <>
      <Header />

      <div className='buyer'>
        <div className='buyerFirst'>
          <h2 className='buyerh2'><FaStar className='icon' /> You successfully buy
            2023 Marcedes-Benz CLA 250 to Sahinur for $240</h2>
        </div>

        <div className='buyerSecond '>
          <div className='button '>
            <button type='button' className='btn1'><h3>View Listing</h3></button>
          </div>
          <div className='button '>
            <button type='button' className='btn1'> <h3>Seller Profile</h3> </button>
          </div>
        </div>

        <div className='buyerthird'>

          <div className='box1'>
            <h2><a href="">Fill up for car paper  <FaAngleRight className='icon' /></a></h2>
          </div>
          <div className='box2'>
            <h2><a href="">Complete your payment <FaAngleRight className='icon' /></a></h2>
          </div>
          <div className='box3'>
            <h2><a href="">Go to deal room area <FaAngleRight className='icon' /></a></h2>
          </div>
        </div>
      </div>

      <Footer />
  
   </>
  )
}

export default buyer