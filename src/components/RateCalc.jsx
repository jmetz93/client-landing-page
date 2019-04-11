import React from 'react'

// styled components
import { Container, Heading, TextHeading, TextContainer, Text, Link } from '../styled-components/RateCalcStyles'

// config
import { rateCalcLink } from '../config'

const RateCalc = () => (
  <Container style={{ backgroundColor: '#D3D3D3' }}>
    <Heading>
      <TextHeading>Rate Calculator</TextHeading>
    </Heading>
    <TextContainer>
      <Text>Use the following link to get the rates you need:</Text>
      <Link href={rateCalcLink} target='_blank' rel='noopener' >Calculate</Link>
    </TextContainer>
  </Container>
)

export default RateCalc