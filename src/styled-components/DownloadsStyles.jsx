import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
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
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-size: 25px;
  margin-bottom: 50px;
`

export const Row = styled.a`
  display: flex;
  flex-direction; row;
  background: white;
  width: 60%;
  text-decoration: none;
  color: black;
  margin-bottom: 5px;
  height: 100%;
  text-align: center;
  justify-content: center

  &:hover {
    background: #ff0000;
  }
`

export const Text = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  
`