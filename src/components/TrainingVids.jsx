import React from 'react'

// styled components
import { Container, Heading, TextHeading, LinkContainer, Row, Link, Step, InFieldHeading } from '../styled-components/TrainingVidsStyles'

// config videos
import { trainingVideos, inFieldVids } from '../config'

const TrainingVids = () => (
  <Container>
    <Heading><TextHeading>Training Webinars</TextHeading></Heading>
    <LinkContainer>
      {trainingVideos.map((video) => {
        return(<React.Fragment style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} key={video.key}>
          <Row>
            <Step>{video.step}</Step>
            <Link href={video.link} target='_blank' rel='noopener'>{video.description}</ Link>
          </Row>
        </React.Fragment>)
        })}
    </LinkContainer>
    <InFieldHeading>In the Field Training:</InFieldHeading>
    {inFieldVids.map((video) => {
      return(<Row style={{ marginRight: '2%'  }}><Link href={video.link} target='_blank' rel='noopener'>{video.description}</Link></Row>)
    })}
  </Container>
)

export default TrainingVids