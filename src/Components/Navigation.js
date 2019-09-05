import React, {Component} from 'react';
import { Navbar, Container, Row, Col, Image, Nav } from 'react-bootstrap';
import logo from '../images/logo.svg';


export class Navigation extends Component {
  studioHover = (event) => {
    document.getElementById("header-nav").classList.add('navbar-studio');
  }
  
  webDesignHover = (event) => {
    document.getElementById("header-nav").classList.add('navbar-webdesign');
  }
  
  printHover = (event) => {
    document.getElementById("header-nav").classList.add('navbar-print');
  }
  
  navbarNoHover = (event) => {
      document.getElementById("header-nav").classList.remove('navbar-studio');
      document.getElementById("header-nav").classList.remove('navbar-webdesign');
      document.getElementById("header-nav").classList.remove('navbar-print');
  }   

  render() {
    return (
    <header>
      <Navbar id="header-nav" className="navbar-default" expand="false" variant="false">
        <Container id="navbar-container">
          <Row className="top-row">
            {/* <!--Logo--> */}
            <Col xs={12} sm={5} md={4} className="logo-header">
              <a href="index.html">
                <Image src={logo} alt="Logo image" className="logo" />
              </a>
            </Col>
            {/* <!--Brand name--> */}
            <Navbar.Brand md={4} className="d-none d-md-block">
              <a href="index.html"><h1>ColorPro</h1></a>
            </Navbar.Brand>

            {/* <!--Collapsable menu--> */}
            <Col sm={7} md={4} className="d-none d-sm-block navbutton pos-f-t">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-circle">
                <span className="navbar-toggler-icon custom-toggler"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto pos-f-t p-4">
                  <Nav.Link href="#studio">Studio Graficzne</Nav.Link>
                  <Nav.Link href="#web-design">Tworzenie Stron Internetowych</Nav.Link>
                  <Nav.Link href="#print">Drukarnia</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
            {/* <!-- Call on XS screens--> */}
            <Col xs={12} className="d-block d-sm-none">
             <p className="call-on-xs"><a href="tel:+48501385739"><span className="glyphicon glyphicon-envelope"></span>&#9990; +48 501 385 739</a></p>
            </Col>
          </Row>

          {/* <!--Navigation--> */}
          <Row>
            <Col xs={12} lg={4} id="nav-studio" className="nav-item" onMouseEnter={this.studioHover} onMouseLeave={this.navbarNoHover}>
              <Container>
                <Row className="nav-content">
                  <Col xs={12}>
                    <h2>Studio Graficzne</h2>
                  </Col>
                  <Col xs={12} sm={8} md={9} lg={12}>
                    <h3>Kompleksowa obsługa graficzna firm</h3>
                  </Col>
                  <Col className="nav-small-text">
                    <p>Masz wiele ciekawych i kreatywnych pomysłów? Pomożemy w ich realizacji! Zaprojektujemy od podstaw niepowtarzalny wizerunek firmy. Spójność wizerunkowa, opieka konsultanta, przygotowanie pliku do druku, druk.</p>
                  </Col>
                  <Col xs={12} sm={4} md={3} lg={12} className="nav-link-containter">
                    <a className="nav-link" href="#studio">Find Out More</a>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={12} lg={4} id="nav-web-design" className="nav-item" onMouseEnter={this.webDesignHover} onMouseLeave={this.navbarNoHover}>
              <Container>
                <Row className="nav-content">
                  <Col xs={12}>
                    <h2>Tworzenie Stron Internetowych</h2>
                  </Col>
                  <Col xs={12} sm={8} md={9} lg={12}>
                    <h3>Creativity, Usability, Efficiency</h3>
                  </Col>                  
                  <Col className="nav-small-text">
                    <p>Zaprojektujemy strony www, które wyróżnią Twoją firmę w internecie.</p>
                  </Col>
                  <Col xs={12} sm={4} md={3} lg={12} className="nav-link-containter">
                    <a className="nav-link" href="#web-design">Find Out More</a>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col xs={12} lg={4} id="nav-print" className="nav-item" onMouseEnter={this.printHover} onMouseLeave={this.navbarNoHover}>
              <Container>
                <Row className="nav-content">
                  <Col xs={12}>
                    <h2>Drukarnia</h2>
                  </Col>
                  <Col xs={12} sm={8} md={9} lg={12}>
                    <h3>Druk cyfrowy druk offsetowy najwyższej jakości</h3>
                  </Col>
                  <Col className="nav-small-text">
                    <p>Potrzebujesz wysokiej jakosci produktów poligraficznych? Skontaktuj się z nami! Oferujemy profesjonalne usługi poligraficzne w zakresie druku.</p>
                  </Col>
                  <Col xs={12} sm={4} md={3} lg={12} className="nav-link-containter">
                    <a className="nav-link" href="#print">Find Out More</a>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          
        </Container>
      </Navbar>
    </header>
    )
  }

}