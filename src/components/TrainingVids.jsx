import React from 'react'

// styled components
import { Container, Heading, LinkContainer, Row, Link } from '../styled-components/TrainingVidsStyles'

// config videos
import { trainingVideos, inFieldVids } from '../config'

const TrainingVids = () => (
  <Container>
    <Heading><h2 style={{ color: 'white' }}>TRAINING WEBINARS</h2></Heading>
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
  </Container>
)

export default TrainingVids