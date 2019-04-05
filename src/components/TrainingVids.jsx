import React from 'react'

// styled components
import { Container, Heading, TextHeading, LinkContainer, Row, Link } from '../styled-components/TrainingVidsStyles'

// config videos
import { trainingVideos, inFieldVids } from '../config'

const TrainingVids = () => (
  <Container>
    <Heading><TextHeading>Training Webinars</TextHeading></Heading>
    <LinkContainer>
      {trainingVideos.map((video) => {
        return(<React.Fragment key={video.key}>
          <Row>
            <h3>{video.step}</h3>
            <Link href={video.link} target='_blank' rel='noopener'>{video.description}</ Link>
          </Row>
        </React.Fragment>)
        })}
    </LinkContainer>
    <h2 style={{ marginTop: '25px', marginBottom: '-5px' }}>In the Field Training:</h2>
    {inFieldVids.map((video) => {
      return(<Row style={{ marginRight: '2%' }}><Link href={video.link} target='_blank' rel='noopener' style={{ marginRight: '15px' }}>{video.description}</Link></Row>)
    })}
  </Container>
)

export default TrainingVids