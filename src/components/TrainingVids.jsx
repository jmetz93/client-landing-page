import React from 'react'

// styled components
import { Container, Link } from '../styled-components/TrainingVidsStyles'

// config videos
import { trainingVideos, inFieldVids } from '../config'

const TrainingVids = () => (
  <Container>
    {trainingVideos.map((video) => {
      return(<React.Fragment key={video.key}>
        <h3>{video.step}</h3>
        <Link href={video.link} target='_blank' rel='noopener'>{video.description}</ Link>
      </React.Fragment>)
      })}
  </Container>
)

export default TrainingVids