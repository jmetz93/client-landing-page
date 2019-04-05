import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-top: 20px;
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0000ff;
  margin-top: 80px;
  margin-bottom: 20px;
  width: 100%;
`

export const Title = styled.div`
  text-align: center;
  text-decoration: underline;
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
`
export const LinksContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  margin-bottom: 5px;
`

export const Link = styled.a`
  text-decoration: underline;
  margin-left: 5px;
  margin-rigth: 5px;
`