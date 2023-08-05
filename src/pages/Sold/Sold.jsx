
import { FaAngleRight, FaListAlt, FaStar } from "react-icons/fa";
import { Footer } from "../../components/headerPage/footer";
import Header from "../../components/headerPage/header";
import "./sold.scss";
const Sold = () => {
    return (
        <>
            <Header />

            <div className='sold'>
                <div className='soldFirst '>
                    <h5 className='soldh1'><FaStar className='icon' /> You sold 2023 Marcedes-Benz CLA 250 to Sahinur for $240</h5>
                </div>
                <div className='soldthird'>

                    <div className='box1'>
                        <h1><a href=""><FaListAlt /> Seller Options</a></h1>
                        <p>Important to-dos and other options</p>
                    </div>
                    <div className='box2'>
                        <h2><a href="">Go to the deal completion area <FaAngleRight className='icon' /></a></h2>
                        <p>to finalize the sale</p>
                    </div>
                    <div className='box3'>
                        <h2><a href="">Hide Listing <FaAngleRight className='icon' /></a></h2>
                        <p>this will remove your listing from search result</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Sold;