import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';

const work = () => {
    return (
        <Container>
           <Row xs={1} md={2}>
        <Col className='work-item'>1 of 4</Col>
        <Col className='work-item'>2 of 4</Col>
        <Col className='work-item'>3 of 4</Col>
        <Col className='work-item'>4 of 4</Col>
      </Row>
        </Container>
      );
}

export default work
