import React from 'react'

// styled components
import { Container, Heading, TextContainer } from '../styled-components/RateCalcStyles'

// config
import { rateCalcLink } from '../config'

const RateCalc = () => (
  <Container style={{ backgroundColor: '#D3D3D3' }}>
    <Heading>
      <h2 style={{ color: 'white' }}>RATE CALCULATOR</h2>
    </Heading>
    <TextContainer>
      <div style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold' }}>Use the following link to get the rates you need:</div>
      <a href={rateCalcLink} target='_blank' rel='noopener' style={{ fontSize: '25px' }}>Calculate</a>
    </TextContainer>
  </Container>
)

export default RateCalc