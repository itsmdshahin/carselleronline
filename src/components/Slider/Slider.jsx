import './slider.scss'

import React from  'react';
import Button from 'react-bootstrap/Button';
import { MDBCol, MDBIcon } from "mdbreact";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaSistrix} from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <>
       <div className='index'>
        <div className='header'>
          <div className='backgroundimage'>
           <h1>#1 Marketplace to Buy & Sell Car</h1>
           
           <div className='search-container'>  
              <div className="wrap">
                <div className="search">
                  <input type="text" className="searchTerm" id="Search" placeholder='Search'></input>
                  <button type="submit" className="searchButton">
                    <p><FaSistrix/> </p>
                  </button>
                </div>
              </div>
           </div>
        
        <div className='buttoncon'>
        <Button >Sell My Car</Button>
      <Button >Buy New Car</Button>
      <Button >Buy Old Car</Button>
      <Button >Financing</Button>
        </div>

        </div>
        </div>
        

        <div className='secendheader'>
          <h1>Popular Cars</h1>
           <div className='secondpart'>
            <table>
              <tr>
                <th>Popular Maker <hr /></th>
                <th>Popular Crossover <hr /> </th>
                <th>Popular Sedans <hr /> </th>
                <th>Popular Wagon <hr /> </th>
              </tr>
              <tr>
                <td><a href="">AUDI</a> </td>
                <td><a href="">BMW</a></td>
                <td><a href="">Honda</a></td>
                <td><a href="">Totota</a></td>

              </tr>
              <tr>
                <td><a href="">Caddilac</a></td>
                <td><a href="">Hyundai</a></td>
                <td><a href="">Tesla</a></td>
                <td><a href="">Jeep</a></td>
              </tr>
              <tr>
                <td><a href="">Lincoln</a></td>
                <td><a href="">Lexus</a></td>
                <td><a href="">Maserati</a></td>
                <td><a href="">Marcedes</a></td>
              </tr>
              <tr>
                <td></td>
                <td><a href="">Subaru</a></td>
                <td></td>
                <td></td>
              </tr>
            </table>
           </div>
        </div>
             

      </div>
     </>
    )
}

export default Slider