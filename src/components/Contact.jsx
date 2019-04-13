import React from 'react'
import axios from 'axios'
import validator from 'validator'
import { SocialIcon } from 'react-social-icons'


//styled components
import { 
  Container, Header, Info, Button, FormContainer, FormSectionContainer
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
    formInputErrors: [],
    inputSize: '50',
    textAreaCols: '100',
    textAreaRows: '10'
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.updateWindowDimensions);
    this.updateWindowDimensions()
  }

  updateWindowDimensions = () => {
    if(window.innerWidth < 640) {
      this.setState({
        inputSize: '30',
        textAreaCols: '40',
        textAreaRows: '8'  
      })
    } 
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
  
      axios.post('http://localhost:3000/email', data)
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
    const { 
      name, email, message, emailOpen, formInputErrors, inputSize, textAreaCols, textAreaRows 
    } = this.state

    return (
      <Container>
        <Header>Connect With Me!</Header>
        <Info>Located: Los Angeles, California</Info>
        <Info>Phone: (424)-291-1987</Info>
        <Info>Email: ryanm@snlfinalexpense.com</Info>
        <div style={icons}> 
            <SocialIcon url='https://www.linkedin.com/in/jacob-metzinger-a2b8a7142/' />
        </div>
        {!emailOpen && <Button type='button' onClick={this.openEmail}>Reach Out!</Button>}
        {emailOpen && <FormContainer>
          <form className='contact-form' onSubmit={ (e) => this.sendEmail(e)}>
            <FormSectionContainer>
              {formInputErrors.map(error => (
                <p key={error} style={{ textAlign: 'center' }}>Error: {error}</p>
              ))}
            </FormSectionContainer>

            <FormSectionContainer>
              <label class='message-name' htmlFor='message-name' style={labels}>Your Name</label>
              <input onChange={e => this.handleInput(e)} name='name' class='message-name'  size={inputSize} type='text' placeholder='Name' required value={name}/>
            </FormSectionContainer>

            
            <FormSectionContainer>
              <label class='message-email' htmlFor='message-email' style={labels}>Your Email</label>
              <input onChange={e => this.handleInput(e)} name='email' class='message-email' size={inputSize} type='email' placeholder='your@email.com' required value={email} />
            </FormSectionContainer>

         
            <FormSectionContainer>
              <label class='message' htmlFor='message-input' style={labels}>Your Message</label>
              <textarea onChange={e => this.handleInput(e)} rows={textAreaRows} cols={textAreaCols} name='message' class='message-input' type='text' placeholder='Please write your message here' value={message} required/>
            </FormSectionContainer>

            <div className='button--container' style={{ marginTop: '2%' }}>
              <Button type='submit' className='button button-primary'>{ this.state.buttonText }</Button>
              <Button type='button' className='button button-cancel' onClick={this.openEmail}>Cancel</Button>
            </div>
          </form>
        </FormContainer>}
      </Container>
    )
  }
}