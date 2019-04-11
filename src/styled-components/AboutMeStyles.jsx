import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #DCDCDC;
  margin-top: 50px;
`
export const Image = styled.image`

`

export const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-top: 3%;
  margin-bottom: 3%;
  @media screen and (max-width: 600px) {
    font-size: 24px;
  }
`

export const Subheader = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5%;
  

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Bio = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 20px;
  
  font-size: 25px;
  margin-bottom: 20px;
  width: 75%

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`