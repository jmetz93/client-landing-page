import React from 'react'
import { SocialIcon } from 'react-social-icons'

// Components
import AboutMe from './AboutMe'
import Contact from './Contact'
import Downloads from './Downloads'
import OrderLeads from './OrderLeads'
import RateCalc from './RateCalc'
// import SignUp from './SignUp'
import TrainingVids from './TrainingVids'

// Styled Components
import { Header, Title, Container } from '../styled-components/AppStyles'

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  left: "0",
  bottom: "0",
  height: "100%",
  width: "100%",
}

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

const icons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}


export default class App extends React.Component {
  state = {}

  render() {
    return (
      <div>
        <Header>
          <Title>FINAL EXPENSE SALES TRAINING!</Title>
        </Header>
        <Container>
          <AboutMe />
          <TrainingVids />
          <RateCalc />
          <OrderLeads />
          <Downloads />
          <Contact />
        </Container>
        <div>
            <div style={phantom} />
            <div style={style}>
                <div>Website built and designed by Jacob Metzinger{"\n"}</div>
                <div>For business inquiries:</div>
                <div style={{marginBottom: '10px'}}>
                  <a href={"mailto:" + 'jacob.adam.metzinger@gmail.com'}>jacob.adam.metzinger@gmail.com</a>
                  <div style={{ marginTop: '5px'}}>(424)216-2291</div>
                </div>
                <div style={icons}> 
                    <SocialIcon url="https://www.linkedin.com/in/jacob-metzinger-a2b8a7142/" />
                </div>
            </div>
        </div>
      </div>
    )
  }
}