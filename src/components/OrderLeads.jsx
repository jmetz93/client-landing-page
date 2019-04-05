import React from 'react'

// styled components
import { Container, Heading, Title, LinksContainer, Link, Row } from '../styled-components/OrderLeadsStyles'

// config
import { orderLeads } from '../config'

const OrderLeads = () => (
  <Container>
    <Heading>
      <h2 style={{ color: 'white' }}>START GETTING YOUR OWN LEADS</h2>
    </Heading>
    <Container>
      <Container style={{ marginBottom: '25px' }}>
        <Row style={{ fontSize: '25px', fontWeight: 'bold', marginTop: '20px', marginBottom: '20px' }}>
          <Link href={orderLeads.watchThis[0].link} target='_blank' rel='noopener'>{orderLeads.watchThis[0].description}</Link> 
        </Row>
      </Container>
      <Title>Internet Generated Leads</Title>
      <LinksContainer>
        <Row>
          <div style={{ textDecoration: 'underline', marginBottom: '5px' }}>{orderLeads.internet[1].title}</div>
          <div>{orderLeads.internet[1].description}</div>
        </Row>
        <Row>
          <Link href={orderLeads.internet[0].source} style={{ marginLeft: '0px' }} target='_blank' rel='noopener'>{orderLeads.internet[0].linkTitle}</Link>
          <div>{orderLeads.internet[0].description}</div>
        </Row>
      </LinksContainer>
      <Title style={{ marginTop: '10px' }}>Direct Mail Leads</Title>
      <LinksContainer>
        {orderLeads.directMail.map((entry) => {
           return <Row>
              <div>{entry.step}</div>
              <Link href={entry.source} target='_blank' rel='noopener'>{entry.linkTitle}</Link>
              <div>{entry.description}</div>
            </Row> 
        })}
      </LinksContainer>
      <Title style={{ marginTop: '10px' }}>Telemarketing Leads</Title>
      <LinksContainer>
        {orderLeads.telemarketing.map((entry) => {
          return <Row>
            <Link href={entry.source} target='_blank' rel='noopener'>{entry.linkTitle}</Link>
            <div>{entry.description}</div>
          </Row>
        })}
      </LinksContainer>
    </Container>
  </Container>
)

export default OrderLeads