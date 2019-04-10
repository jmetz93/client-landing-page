import React from 'react'

// styled components
import { Container, Heading, TextHeading, TextContainer } from '../styled-components/RateCalcStyles'

// config
import { rateCalcLink } from '../config'

const RateCalc = () => (
  <Container style={{ backgroundColor: '#D3D3D3' }}>
    <Heading>
      <TextHeading>Rate Calculator</TextHeading>
    </Heading>
    <TextContainer>
      <div style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold', textAlign: 'center' }}>Use the following link to get the rates you need:</div>
      <a href={rateCalcLink} target='_blank' rel='noopener' style={{ fontSize: '25px' }}>Calculate</a>
    </TextContainer>
  </Container>
)

export default RateCalc