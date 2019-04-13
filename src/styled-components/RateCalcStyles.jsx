import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 7%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0000ff;
  margin-top: 3%;
  margin-bottom: 3%;
  width: 80%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const TextHeading = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: center;

  @media screen and (max-width: 640px) {
    font-size: 25px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  margin-bottom: 4%;
  width: 80%
`

export const Text = styled.div`
  font-size: 25px;
  margin-bottom: 2%;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`

export const Link = styled.a`
  font-size: 25px

  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
`