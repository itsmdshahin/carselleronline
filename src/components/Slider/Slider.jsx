import './slider.scss'

import React from  'react';
import Button from 'react-bootstrap/Button';
import { MDBCol, MDBIcon } from "mdbreact";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = () => {
    return (
        <>
            <div className='index'>
                <div className='header'>
                    <div className='backgroundimage'>
                        <h1 className='header1'>Marketplace to Buy & Sell Car</h1>

                        <div className='search-container'>
                            <MDBCol md="6">
                                <form className="formcontainer"> {/* Add the 'd-flex justify-content-center' class */}
                                    <MDBIcon icon="search" />
                                    <input className="formcontainernext" type="text" placeholder="Search" aria-label="Search" />
                                </form>
                            </MDBCol>
                        </div>

                        <div className='downdiv pt-5'>
                            <Button variant="outline-dark" className='m-4'>Sell My Car</Button>{' '}
                            <Button variant="outline-dark" className='m-4'>Buy New Car</Button>{' '}
                            <Button variant="outline-dark" className='m-4'>Buy Old Car</Button>{' '}
                            <Button variant="outline-dark" className='m-4'>Financing</Button>
                        </div>

                    </div>
                </div>


                <div className='secendheader text-center pt-5'>
                    <h1>Popular Cars</h1>
                    <div className='secondpart'>
                        <Container className='pt-5 text-dark'>
                            <Row className='headerRow'>
                                <Col>Popular Maker <hr /></Col>
                                <Col>Popular Crossover <hr /></Col>
                                <Col>Popular Sedans <hr /></Col>
                                <Col>Popular Wagon <hr /></Col>
                            </Row>
                            <Row className='insideRow pt-2 '>
                                <Col> <a href="">AUDI</a> </Col>
                                <Col> <a href="">BMW</a> </Col>
                                <Col> <a href="">Honda</a></Col>
                                <Col> <a href="">Totota</a></Col>
                            </Row>
                            <Row className='insideRow pt-2 '>
                                <Col> <a href="">Caddilac</a></Col>
                                <Col> <a href="">Hyundai</a></Col>
                                <Col> <a href="">Tesla</a></Col>
                                <Col> <a href="">Jeep</a></Col>
                            </Row>
                            <Row className='insideRow pt-2 '>
                                <Col> <a href="">Lincoln</a></Col>
                                <Col> <a href="">Lexus</a></Col>
                                <Col> <a href="">Maserati</a></Col>
                                <Col> <a href="">Marcedes</a></Col>
                            </Row>
                            <Row className='insideRow pt-2 '>
                                <Col> <a href="">Subaru</a></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col></Col>
                            </Row>
                        </Container>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Slider