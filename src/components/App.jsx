import React from 'react'

// Components
import AboutMe from './AboutMe'
// import Contact from './Contact'
// import Downloads from './Downloads'
// import OrderLeads from './OrderLeads'
import RateCalc from './RateCalc'
// import SignUp from './SignUp'
import TrainingVids from './TrainingVids'

// Styled Components
import { Header, Title, Container, Footer } from '../styled-components/AppStyles'

export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <Header>
          <Title>FINAL EXPENSE SALES TRAINING!</Title>
        </Header>
        <Container>
          <AboutMe></AboutMe>
          <TrainingVids></TrainingVids>
          <RateCalc></RateCalc>
          
        </Container>
      </div>
    )
  }
}