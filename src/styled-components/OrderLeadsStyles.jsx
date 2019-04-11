import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 3%;
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0000ff;
  margin-top: 5%;
  margin-bottom: 1%;
  width: 100%;
`

export const TextHeading = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`

export const Title = styled.div`
  text-align: center;
  text-decoration: underline;
  font-size: 25px;
  margin-bottom: 2%;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 4%;
`

export const WatchThisRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1%;
  text-align: center;
  font-weight: bold;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 1%;
  text-align: center;
`

export const Link = styled.a`
  text-decoration: underline;
  margin-left: 1%;
  text-align: center;
  white-space: nowrap;
  font-size: 20px;
  font-weight: bold

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export const Text = styled.div`
  font-size: 18px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

export const FbLeads = styled.div`
  font-size: 20px;
  text-decoration: underline;
  margin-bottom: 1%
  font-weight: bold

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`