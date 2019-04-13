import styled from 'styled-components'

export const Header = styled.section`
  background: #33A5FF;
  display: flex;
  justify-content: center;
  width: 100%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const Title = styled.h1`
  textAllign: center;
  color: white;
  font-size: 40px;
  text-align: center;

  @media screen and (max-width: 640px) {
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