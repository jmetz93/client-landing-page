import React from 'react'
import axios from 'axios'

//styled components
import { Container, Header, Info } from '../styled-components/ContactStyles'

export default class Contact extends React.Component {
  state = {
    emailOpen: false,
    name: '',
    email: '',
    message: ''
  }

  openEmail = () => {
    const { emailOpen } = this.state
    this.setState({
      emailOpen: !emailOpen
    })
  }

  handleInput = (e) => {

  }

  sendEmail = (e) => {
    // e.preventDefault()
    const { name, email, message } = this.state
    console.log('email')
    axios.post('/email', {
      name: name,
      email: email,
      message: message
    }).then(() => {
        console.log('email sent')
    }).catch((err) => {
      console.log('error sending email: ', err)
    })
  }

  render () {
    return (
      <Container>
        <Header>Contact Ryan</Header>
        <Info onClick={()=>this.sendEmail()}>Located: Los Angeles, California</Info>
        <Info>Phone: (424)-291-1987</Info>
        {/* <form id="contact-form" onSubmit={() => this.sendEmail(e)} method="POST">
          <div className="form-group">
              <label for="name">Name</label>
              <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
              <label for="message">Message</label>
              <textarea className="form-control" rows="5" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form> */}
      </Container>
    )
  }
}