import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  background-color: #0000ff;
  margin-top: 3%;
  margin-bottom: 2%;
  width: 80%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const TextHeading = styled.div`
  font-size: 40px;
  color: white;
  font-weight: bold;
  margin-top: 1%;
  margin-bottom: 1%;

  @media screen and (max-width: 640px) {
    font-size: 25px;
  }
`

export const RowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-size: 25px;
  margin-bottom: 3%;

  @media screen and (max-width: 640px) {
    font-size: 18px;
  }
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
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);

  &:hover {
    background: #ff0000;
  }
`

export const Text = styled.div`
  margin-bottom: 10px;
  margin-top: 10px;
  
`