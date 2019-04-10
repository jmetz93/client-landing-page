import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`

export const Header = styled.div`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 3%;
  text-decorator: underline;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`

export const Info = styled.div`
  font-size: 20px;
  margin-bottom: 1%;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
`

export const EmailButton = styled.button`
  background-color: #0000ff;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  margin-top: 2%;
  @media screen and (max-width: 600px) {
    font-size: 12px;
    padding: 5px 15px;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0%;
`

export const FormSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
` 