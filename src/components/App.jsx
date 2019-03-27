import React from 'react'

// Styled Components
import { Header } from '../styled-components/AppStyles'

export default class App extends React.Component {
  state = {}

  componentDidMount = () => {

  }

  render() {
    return (
      <div>
        <Header>
          <h1>FINAL EXPENSE SALES TRAINING!</h1>
        </Header>
      </div>
    )
  }
}