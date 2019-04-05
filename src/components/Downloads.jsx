import React from 'react'

// styled components
import { Container, Heading, TextHeading, RowContainer, Row, Text } from '../styled-components/DownloadsStyles'

// config
import { downloads } from '../config'

const Downloads = () => (
  <Container style={{ backgroundColor: '#D3D3D3' }}>
    <Heading>
     <TextHeading>Downloads</TextHeading>
    </Heading>
    <RowContainer>
      {downloads.map((download) => <Row href={download.source}><Text>{download.description}</Text></Row>)}
    </RowContainer>
  </Container>
)

export default Downloads