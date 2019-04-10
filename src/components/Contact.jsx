import React from 'react'
import axios from 'axios'
import validator from 'validator'
import { SocialIcon } from 'react-social-icons'


//styled components
import { 
  Container, Header, Info, EmailButton, FormContainer, FormSectionContainer
} from '../styled-components/ContactStyles'

const icons = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '1%'
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

const input = {
  width: '30%',
  height: '30%'
}

const labels = {
  fontWeight: 'bold',
  marginBottom: '2%'
}

export default class Contact extends React.Component {
  state = {
    emailOpen: false,
    name: '',
    email: '',
    sent: false,
    message: '',
    buttonText: 'Send',
    formInputErrors: []
  }

  openEmail = () => {
    const { emailOpen } = this.state
    this.setState({
      emailOpen: !emailOpen
    })
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendEmail = (e) => {
    e.preventDefault()
    const { name, email, message } = this.state
    let { formInputErrors } = this.state
    const data = {
      name,
      email,
      message
    }
    
    const isFirstAndLastNameIncluded = name.split(' ').length >= 2
    const isValidEmail = validator.isEmail(email)

    formInputErrors = []

    if (!isFirstAndLastNameIncluded) {
      formInputErrors.push('Please make sure to enter your first and last name.')
      this.setState({
        formInputErrors
      })
    } if (isValidEmail) {
      formInputErrors.push('Email is not valid, please check that your email is correct.')
      this.setState({
        formInputErrors
      })
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
    const { name, email, message, emailOpen, formInputErrors } = this.state

    return (
      <Container>
        <Header>Connect With Me!</Header>
        <Info>Located: Los Angeles, California</Info>
        <Info>Phone: (424)-291-1987</Info>
        <Info>Email: ryanm@snlfinalexpense.com</Info>
        <div style={icons}> 
            <SocialIcon url='https://www.linkedin.com/in/jacob-metzinger-a2b8a7142/' />
        </div>
        {!emailOpen && <EmailButton type='button' onClick={this.openEmail}>Reach Out!</EmailButton>}
        {emailOpen && <FormContainer>
          <form className='contact-form' onSubmit={ (e) => this.sendEmail(e)}>
            <FormSectionContainer>
              {formInputErrors.map(error => (
                <p key={error} style={{ textAlign: 'center' }}>Error: {error}</p>
              ))}
            </FormSectionContainer>

            <FormSectionContainer>
              <label class='message-name' htmlFor='message-name' style={labels}>Your Name</label>
              <input onChange={e => this.handleInput(e)} name='name' class='message-name'  size='50' type='text' placeholder='Name' required value={name}/>
            </FormSectionContainer>

            
            <FormSectionContainer>
              <label class='message-email' htmlFor='message-email' style={labels}>Your Email</label>
              <input onChange={e => this.handleInput(e)} name='email' class='message-email' size='50' type='email' placeholder='your@email.com' required value={email} />
            </FormSectionContainer>

         
            <FormSectionContainer>
              <label class='message' htmlFor='message-input' style={labels}>Your Message</label>
              <textarea onChange={e => this.handleInput(e)} rows="10" cols="100" name='message' class='message-input' type='text' placeholder='Please write your message here' value={message} required/>
            </FormSectionContainer>

            <div className='button--container' style={{ marginTop: '2%' }}>
              <button type='submit' className='button button-primary' style={buttons}>{ this.state.buttonText }</button>
              <button type='button' className='button button-cancel' onClick={this.openEmail} style={buttons}>Cancel</button>
            </div>
          </form>
        </FormContainer>}
      </Container>
    )
  }
}