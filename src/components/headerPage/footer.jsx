import React from 'react';
import "./footer.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCopyright } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <div>
      <div className='footer'>
        <div className='footerSecond'>
          <table>
            <tr>
              <th>Sell  </th>
              <th>Buy  </th>
              <th>Feature </th>
              <th>About </th>
            </tr>
            <tr>
              <td>
                <Link to='/'>Get a free Valuation</Link></td>
              <td><Link to='/' >Browse</Link></td>
              <td><Link to='/'>Listing Verification</Link></td>
              <td><Link to='/'>Term & Condition</Link></td>

            </tr>
            <tr>
              <td><Link to='/'>List Privately</Link></td>
              <td><Link to='/' >How to Buy</Link></td>
              <td><Link to='/'>Market-Insight</Link></td>
              <td><Link to='/'>Help Center</Link></td>
            </tr>
            <tr>
              <td><Link to='/'>How to Sell</Link></td>
              <td></td>
              <td><Link to='/'>Recommendation</Link></td>
              <td></td>
            </tr>
            <tr>
              <td><Link to='/'>Sell Now</Link></td>
              <td></td>
              <td><Link to='/'>Biddig</Link></td>
              <td></td>
            </tr>
          </table>

        </div>
        <div className='footername'><FaCopyright className='icon' /> 2023 carselleronline.com All rights reserved.</div>
      </div>
    </div>
  )
}
