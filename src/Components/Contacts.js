import React, {Component} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ContactForm } from './ContactForm';


export class Contacts extends Component {
  render() {
    return (
      <div id="contacts">
      <Container>
        <h2>Kontakt</h2>
        <Row>
          <Col xs={12} md={6}>
            <p><b>Adres:</b> ul. Borzymowska 28, Warszawa, 03-565<br />
            <b>Tel:</b> +48 501 385 739<br />
            <b>E-mail:</b> <a href="mailto:colorpro.eu@gmail.com"> colorpro.eu@gmail.com</a></p>
          </Col>
          <Col id="form" xs={12} md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>      
      </div>
    )
  }
}