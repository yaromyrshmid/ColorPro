import React, {Component} from 'react';
import { Container, Row, Col, Image, Jumbotron, Carousel } from 'react-bootstrap';
import pic_SG_1 from '../images/pic_SG_1.png';
import pic_SG_2 from '../images/pic_SG_2.png';
import pic_SG_3 from '../images/pic_SG_3.png';
import pic_D_1 from '../images/pic_D_1.png';
import pic_D_2 from '../images/pic_D_2.png';
import pic_D_3 from '../images/pic_D_3.png';
import pic_TSI_1 from '../images/pic_TSI_1.png';
import pic_TSI_2 from '../images/pic_TSI_2.png';
import pic_TSI_3 from '../images/pic_TSI_3.png';


export class Content extends Component {
  render() {
    return (
    <div>
      <Jumbotron fluid id="about">
      <Container>
          <h3>O nas</h3>
          <p>Witamy na naszej stronie internetowej!</p>
          <p className="text_myriad">Zawsze możesz być pewien, że otrzymasz produkty wysokiej jakości pod indywidualne zamówienie.</p>
          <p className="text_myriad">Z Color Pro możesz stworzyć niepowtarzalny styl korporacyjny, wizytówki , ulotki, menu dla restauracji i kawiarni, wydać czasopismo lub katalog i opublikować książkę z ciekawymi ilustracjami.</p>
          <p className="text_myriad">Cieszymy się, że możemy zrealizować wszystkie Twoje pomysły.</p>
          <p className="text_myriad">Dzięki osobistemu podejściu jesteśmy w stanie zapewnić Państwu obsługę na najwyższym poziomie!</p>
      </Container>
      </Jumbotron>

      {/* <!--Oferty--> */}
      <div id="studio" className="oferty offerty_yellow">
      <Container>
        <h2>Studio Graficzne</h2>
        <Row>
          <Col md={10} lg={8}>
            <p className="text_myriad">W naszej ofercie graficznej szczególne miejsce zajmuje stworzenie korporacyjnego stylu, który sprawi, że Twoja marka będzie rozpoznawalna i popularna. Przygotujemy wszystkie niezbędne atrybuty dla Twojej firmy. Zaprojektujemy od podstaw akcesoria firmowe: logo, wizytówki, papiery firmowe, broszury, ulotki, katalogi firmowe.</p>
          </Col>
        </Row>
        <a className="oferty_a" href="#contacts">Oferta</a>
        <Row className="img_row">
          <Col xs={4} className="square d-none d-md-block">
            <Image src={pic_SG_1} />
          </Col>
          <Col xs={4} className="square d-none d-md-block">
            <Image src={pic_SG_2} />
          </Col>
          <Col xs={4} className="square d-none d-md-block">
            <Image src={pic_SG_3} />
          </Col>
        </Row>
        <Carousel className="d-md-none" controls={false} indicators={false} interval={3000}>
          <Carousel.Item>
            <Image src={pic_SG_1} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={pic_SG_2} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={pic_SG_3} />
          </Carousel.Item>
        </Carousel>
      </Container>
      </div>

      <div id="web-design" className="oferty oferty_white">
      <Container>
        <h2>Tworzenie stron inernetowych. UX/UI design</h2>
        <Row>
          <Col md={10} lg={8}>
          <p className="text_myriad">Nowoczesne projekty graficzne stron internetowych.</p>
          </Col>
        </Row>
        <a className="oferty_a gray" href="#contacts">Oferta</a>
        <Row className="img_row">
          <Col xs={4} className="square d-none d-md-block">
            <Image src={pic_TSI_1} />
          </Col>
          <Col xs={4} className="square d-none d-md-block">
            <Image src={pic_TSI_2} />
          </Col>
          <Col xs={4} className="square d-none d-md-block">
            <Image src={pic_TSI_3} />
          </Col>
        </Row>
        <Carousel className="d-md-none" controls={false} indicators={false} interval={3000}>
          <Carousel.Item>
            <Image src={pic_TSI_1} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={pic_TSI_2} />
          </Carousel.Item>
          <Carousel.Item>
            <Image src={pic_TSI_3} />
          </Carousel.Item>
        </Carousel>
      </Container>
      </div>

      <div id="print" className="oferty offerty_yellow ">
      <Container>
          <h2>Drukarnia</h2>
        <Row>
          <Col xs={12} md={4}>
            <h3>Druk offcetowy</h3>
            <p className="text_myriad">Wysokonakładowe zlecenia realizujemy na maszynach offsetowych. Doskonałą jakość druku offsetowego otrzymujemy, korzystając z surowców oraz komponentów najwyższej jakości tylko sprawdzonych i renomowanych producentów.</p>
            <a className="oferty_a" href="#contacts">Oferta</a>
            <div className="img_row square">
              <Image src={pic_D_1} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h3>Druk cyfrowy</h3>
            <p className="text_myriad">To idealne rozwiązanie przy drukach niskonakładowych i personalizowanych. Wydrukujemy dla Was nawet w jednostkowych ilościach.</p>
            <a className="oferty_a" href="#contacts">Oferta</a>
            <div className="img_row square">
              <Image src={pic_D_2} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <h3>Inne usługi</h3>
            <p className="text_myriad"><b>Usługi prepress</b><br /> Realizujemy zlecenia od projektu graficznego do przygotowania go do druku, realizację wydruku oraz dostarczenie gotowych materiałów do klienta.<br /> <b>Usługi introligatorski</b><br /> Wykonujemy wszystkie rodzaje opraw od standardowych po ekskluzywne.</p>
            <a className="oferty_a" href="#contacts">Oferta</a>
            <div className="img_row square">
              <Image src={pic_D_3} />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
    </div>
    )
  }

}