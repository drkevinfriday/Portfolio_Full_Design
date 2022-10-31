
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SocialIcon } from 'react-social-icons';


 function Footer() {
  return (
    <Container>
        <Col>
            <header>Connect</header>
        </Col>

        <Row>
            <SocialIcon url="https://twitter.com/" />
            <SocialIcon url="https://github.com/drkevinfriday" />     
            <SocialIcon url="https://www.linkedin.com/in/kevin-friday-a898026b/" />
            <SocialIcon url="https://twitter.com/" />
        </Row>
        
        
     
    </Container>
  );
}
export default Footer