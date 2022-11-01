
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { SocialIcon } from 'react-social-icons';


 function Footer() {
  return (
    <Container>
        <Col>
            <h2 className='footer-title d-flex justify-content-center m-auto p-3 '>Connect</h2>
        </Col>

        <Row className='social-box d-flex justify-content-around m-4 p-4'>
            <SocialIcon className='social-link' style={{opacity:.25}}bgColor='white' url="https://twitter.com/" />
            <SocialIcon className='social-link w3-tiny'style={{opacity:.25}} bgColor='white' url="https://github.com/drkevinfriday" />     
            <SocialIcon className='social-link' style={{opacity:.25}}  bgColor='white' url="https://www.linkedin.com/in/kevin-friday-a898026b/" />
            <SocialIcon className='social-link' bgColor='white' style={{opacity:.25}} url="https://twitter.com/" />
        </Row>
        
        
     
    </Container>
  );
}
export default Footer