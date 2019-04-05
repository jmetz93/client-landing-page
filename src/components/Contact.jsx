import React from 'react'
import axios from 'axios'
import validator from 'validator'
import { SocialIcon } from 'react-social-icons'


//styled components
import { Container, Header, Info, EmailButton, FormContainer } from '../styled-components/ContactStyles'

const icons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center'
}

const buttons = {
  backgroundColor: '#0000ff',
  border: 'none',
  color: 'white',
  padding: '10px 27px',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '16px',
  boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)',
  marginRight: '10px',
  marginTop: '10px',
}

export default class Contact extends React.Component {
  state = {
    emailOpen: false,
    name: '',
    email: '',
    sent: false,
    message: '',
    buttonText: 'Send'
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
    e.preventDefault()
    const { name, email, message } = this.state

    
    const data = {
        name: name,
        email: email,
        message: message
    }

    const nameSplit = name.split(' ')
    console.log('name: ', name)

    if (!(nameSplit.length > 1)) {
      alert('Please enter your First and Last Name')
    } else if (!(message.length > 0)) {
      alert('Please enter a message')
    } else if (!(validator.isEmail(email))) {
      alert('Please enter a valid email address')
    } else {
      this.setState({
        buttonText: '...sending'
      })

      axios.post('/email', data)
      .then( () => {
          this.setState({ sent: true }, this.resetForm())
      })
      .catch( () => {
        console.log('Message not sent')
      })
    }
  }

  resetForm = () => {
    this.setState({
        name: '',
        message: '',
        email: '',
        buttonText: 'Message Sent',
    }, this.setState({
      emailOpen: !emailOpen,
      buttonText: 'Send'
    }))
  }

  render () {
    const { name, email, message, emailOpen } = this.state

    return (
      <Container>
        <Header>Connect With Me!</Header>
        <Info>Located: Los Angeles, California</Info>
        <Info>Phone: (424)-291-1987</Info>
        <Info>Email: ryanm@snlfinalexpense.com</Info>
        <div style={icons}> 
            <SocialIcon url="https://www.linkedin.com/in/jacob-metzinger-a2b8a7142/" />
        </div>
        {!emailOpen && <EmailButton type="button" onClick={this.openEmail}>Email Me Now</EmailButton>}
        {emailOpen && <FormContainer>
          <form className="contact-form" onSubmit={ (e) => this.sendEmail(e)}>
            <label class="message-name" htmlFor="message-name">Your Name</label>
            <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" required value={name}/>
            <label class="message-email" htmlFor="message-email">Your Email</label>
            <input onChange={e => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={email} />
            <label class="message" htmlFor="message-input">Your Message</label>
            <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={message} required/>
            <div className="button--container">
              <button type="submit" className="button button-primary" style={buttons}>{ this.state.buttonText }</button>
              <button type="button" className="button button-cancel" onClick={this.openEmail} style={buttons}>Cancel</button>
            </div>
          </form>
        </FormContainer>}
      </Container>
    )
  }
}