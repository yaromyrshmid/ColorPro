import React, { Component } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { Formik } from 'formik';
import * as yup from 'yup';
import { encode } from "base-64";

const schema = yup.object({
  firstName: yup.string().required('Imię jest wymagane'),
  email: yup.string()
    .email('E-mail jest nie prawidłowy')
    .required('Email jest wymagany'),
  subject: yup.string().required('Temat jest wymagane'),
  message: yup.string().required('Treść wiadomości jest wymagane'),
});

export class ContactForm extends Component {

  postData(values) {
    const { firstName, email, subject, message } = values;

    return fetch('https://colorpro-backend-api.herokuapp.com/api/v1/1234567890/landing_page/', {
      method: 'POST',
      headers: new Headers({
        'Authorization': 'Basic ' + encode("colorpro_api:colorpro"),
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({ name: firstName, email, m_theme: subject, m_text: message })
    });

  }

  render() {
    return (
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const messageSent = 'Twoja wiadomość została wysłana.'
          document.querySelector("#message-sent").textContent = messageSent;
          this.postData(values)
        }}
        initialValues={{
          firstName: '',
          email: '',
          subject: '',
          message: ''
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group controlId="validationFormik01">
                <Form.Control
                  type="text"
                  placeholder="Imię Nazwisko"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.firstName}
                />
                <Form.Control.Feedback>{errors.firstName}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik02">
                <Form.Control
                  type="email"
                  placeholder="Adres email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isValid={touched.firstName && !errors.email}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback>{errors.email}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik03">
                <Form.Control
                  type="text"
                  placeholder="Temat wiadomości"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  isInvalid={touched.subject && !!errors.subject}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.subject}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationFormik04">
                <Form.Control
                  type="text"
                  placeholder="Treść wiadomości"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  isInvalid={touched.message && !!errors.message}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>
              </Form.Group>
              <Row>
                <Col xs={6}> <Button id="form-button" type="submit" >Wysłać</Button> </Col>
                <Col xs={6}><span id="message-sent"></span></Col>
              </Row>
            </Form>
          )}
      </Formik>
    );
  }
}