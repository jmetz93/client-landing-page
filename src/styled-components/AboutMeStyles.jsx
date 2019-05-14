import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #DCDCDC;
  margin-top: 5%;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`
export const Image = styled.img`
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-top: 3%;
  margin-bottom: 3%;
  @media screen and (max-width: 640px) {
    font-size: 28px;
  }
`

export const Subheader = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-top: 5%;
  

  @media screen and (max-width: 640px) {
    font-size: 24px;
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
  margin-top: 3%;
  font-size: 25px;
  margin-bottom: 5%;
  width: 75%

  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`