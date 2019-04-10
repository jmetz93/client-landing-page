import React from 'react'

// styled components
import { Container, Bio, Row } from '../styled-components/AboutMeStyles'

// image
import picture from '../assets/images/image001.jpg'

const AboutMe = () => (
  <Container>
    <h1>Welcome To The Team!</h1>
    <img src={picture} style={{ height: '15%', width: '15%' }}></img>
    <div style={{ fontSize:'150%', fontWeight: 'bold', marginTop: '19px', marginRight: '3px' }}>About me: </div>
    <Row>
      <Bio>Ryan Mattingly has been a leader in the Final Expense Industry since 2016. He has previously held records for sales and Annual Premium at his last organization. To be successful in the Final Expense market, he believes that you need to be willing to give 100% every day, and as long as you follow our proven system, you have a high probability of succeeding. Ryan, a southern California native, grew up in Culver City, California and attended San Diego State University, where he received his bachelor’s degree in Business Management. He is very impressed with the earning potential and the training provided by management. He is looking forward to growing the Southern California territory for many years to come.</Bio>
    </Row>
  </Container>
)

export default AboutMe