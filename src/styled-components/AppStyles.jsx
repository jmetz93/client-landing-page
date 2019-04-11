import styled from 'styled-components'

export const Header = styled.section`
  background: #33A5FF;
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Title = styled.h1`
  textAllign: center;
  color: white;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
`

export const Footer = styled.section``