import React from 'react'
import {Image, Container, Row, Col} from 'react-bootstrap';
import pic from '../assets/img/avatar_bg.PNG'

const home = () => {
    return (
        <Container className='home-container d-flex'>
            
        <Row>
          <Col sm={8}>
               <Image fluid={true}  className="profile-pic"src={pic} /> 
            </Col>
          <Col sm={4} className="home-textbox">
            <h2>Hi i m</h2>
            <h1>Kevin Friday</h1>
            <h5>BACK END ENGINEER</h5>
          </Col>

        </Row>
       
      </Container>
    )
}

export default home
