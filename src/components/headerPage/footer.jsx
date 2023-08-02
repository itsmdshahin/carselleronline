import React from 'react';
import "./footer.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaCopyright } from "react-icons/fa";
export const Footer = () => {
  return (
    <div>
       <div className='footer text-warning text-center pt-5'>
         <div>
          <Container className='pt-5 text-dark'>
            <Row className='footerRow '>
              <Col>Sell </Col>
              <Col>Buy </Col>
              <Col>Feature </Col>
              <Col>About </Col>
            </Row>
            <Row className='pt-3 '>
              <Col><a href="" className='textcl'>Get a free Valuation</a></Col>
              <Col><a href="" className='textcl'>Browse</a></Col>
              <Col><a href="" className='textcl'>Listing Verification</a></Col>
              <Col><a href="" className='textcl'>Term & Condition</a></Col>
            </Row>
            <Row className='pt-3 '>
              <Col><a href="" className='textcl'>List Privately</a></Col>
              <Col><a href="" className='textcl'>How to Buy</a></Col>
              <Col><a href="" className='textcl'>Market-Insight</a></Col>
              <Col><a href="" className='textcl'>Help Center</a></Col>
            </Row>
            <Row className='pt-3'>
              <Col><a href="" className='textcl'>How to Sell</a></Col>
              <Col></Col>
              <Col><a href="" className='textcl'>Recommendation</a></Col>
              <Col></Col>
            </Row>
            <Row className='pt-3 '>
              <Col><a href="" className='textcl'>Sell Now</a></Col>
              <Col></Col>
              <Col><a href="" className='textcl'>Biddig</a></Col>
              <Col></Col>
            </Row>
              <Row>
                <Col>
                <div className='footername p-5 '><FaCopyright /> 2023 carselleronline.com All rights reserved.</div>
                </Col>
              </Row>
          </Container>
         </div>
      </div>
    </div>
  )
}
