import React from 'react'

//styled components
import { Container, Header } from '../styled-components/ContactStyles'

export default class Contact extends React.Component {
  state = {
    emailOpen: false
  }

  render () {
    return (
      <Container>
        <Header>Contact Ryan:</Header>
      </Container>
    )
  }
}