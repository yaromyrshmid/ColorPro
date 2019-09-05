import React, {Component} from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.svg';
import FB_icon from '../images/FB_icon.svg';
import TW_icon from '../images/TW_icon.svg';
import RSS_icon from '../images/RSS_icon.svg';

export class Footer extends Component {
  render() {
    return (
      <footer className="panel-footer">
      <Container>
        <Row>
          <Col xs={7} className="logo-footer">
            <a href="index.html">
              <Image src={logo} alt="Logo image" className="logo"/>
            </a>
          </Col>
          <Col xs={5} className="footer-menu">
            <Row>
            <span><a className="footer-menu-item" href="#about">About</a></span>
            <span><a className="footer-menu-item" href="#studio">Branding</a></span>
            <span><a className="footer-menu-item" href="#web-design">Web-Design</a></span>
            <span><a className="footer-menu-item" href="#print">Print</a></span>
            <span><a className="footer-menu-item" href="#contacts">Contact</a></span>
            </Row>
          </Col>
        </Row>
        <Row className="social">
          <Col xs={12} md={10}>
            <p>&copy; 2019 All rights reserved.</p>
          </Col>          
          <Col xs={12} md={2}>
            <Row>
              <Col xs={4} className="social-icon-container">
                <a href="#">
                  <Image src={FB_icon} className="social-icon" />
                </a>
              </Col>
              <Col xs={4} className="social-icon-container">
                <a href="#">
                  <Image src={TW_icon} className="social-icon" />
                </a>
              </Col>
              <Col xs={4} className="social-icon-container">
                <a href="#">
                  <Image src={RSS_icon} className="social-icon" />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </footer>
    )
  }
}