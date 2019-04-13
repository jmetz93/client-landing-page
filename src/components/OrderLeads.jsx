import React from 'react'

// styled components
import { 
  Container, Heading, TextHeading, Title, LinksContainer, Link, Row, WatchThisRow, Text, FbLeads, WatchThisLink
 } from '../styled-components/OrderLeadsStyles'

// config
import { orderLeads } from '../config'

const OrderLeads = () => (
  <Container>
    <Heading>
      <TextHeading>Start Getting Your Own Leads</TextHeading>
    </Heading>
    <Container>
      <Container style={{ marginBottom: '5%' }}>
        <Row>
          <WatchThisLink href={orderLeads.watchThis[0].link} target='_blank' rel='noopener'>{orderLeads.watchThis[0].description}</WatchThisLink> 
        </Row>
      </Container>
      <Title>Internet Generated Leads</Title>
      <LinksContainer style={{ flexWrap: 'nowrap' }}>
        <Row>
          <FbLeads>{orderLeads.internet[1].title}</FbLeads>
          <Text>{orderLeads.internet[1].description}</Text>
        </Row>
        <Row>
          <Link href={orderLeads.internet[0].source} style={{ marginLeft: '0%' }} target='_blank' rel='noopener'>{orderLeads.internet[0].linkTitle}</Link>
          <Text>{orderLeads.internet[0].description}</Text>
        </Row>
      </LinksContainer>
      <Title style={{ marginTop: '3%' }}>Direct Mail Leads</Title>
      <LinksContainer>
        {orderLeads.directMail.map((entry) => {
           return <Row>
              <Text>{entry.step}</Text>
              <Link href={entry.source} target='_blank' rel='noopener'>{entry.linkTitle}</Link>
              <Text>{entry.description}</Text>
            </Row> 
        })}
      </LinksContainer>
      <Title style={{ marginTop: '1%' }}>Telemarketing Leads</Title>
      <LinksContainer>
        {orderLeads.telemarketing.map((entry) => {
          return <Row>
            <Link href={entry.source} target='_blank' rel='noopener'>{entry.linkTitle}</Link>
            <Text>{entry.description}</Text>
          </Row>
        })}
      </LinksContainer>
    </Container>
  </Container>
)

export default OrderLeads