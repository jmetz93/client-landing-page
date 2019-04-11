import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 80px;
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0000ff;
  margin-top: 50px;
  margin-bottom: 20px;
  width: 80%;
`

export const TextHeading = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 0%;
  margin-bottom: 0%;
  white-space: nowrap;
 
`

export const Step = styled.div`
  font-size: 25px;
  margin-top: 2%;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

export const Link = styled.a`
  color: 'black';
  margin-left: 7%;
  margin-top: 2%;
  font-size: 25px;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

export const InFieldHeading = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-top: 2%;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
