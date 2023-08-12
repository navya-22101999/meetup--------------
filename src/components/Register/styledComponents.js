import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:100vh;
  background-size:cover
  background-color: #ffffff;
`

export const FormAndImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const RegisterLogo = styled.img`
  height: 400px;
  width: 400px;
  margin-right: 10px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
`
export const Heading = styled.h1`
  color: #334155;
  font-size: 47px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const Label = styled.label`
  color: #64748b;
  font-size: 17px;
  font-weight: 800;
  font-family: 'Roboto';
  margin-bottom: 10px;
`
export const Name = styled.input`
  color: #334155;
  font-size: 17px;
  font-family: 'Roboto';
  padding: 8px;
  margin-bottom: 30px;
`
export const Select = styled.select`
  color: #334155;
  font-size: 17px;
  font-family: 'Roboto';
  padding: 8px;
  margin-bottom: 30px;
`
export const Options = styled.option`
  color: #334155;
  font-size: 17px;
  font-family: 'Roboto';
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  font-size: 17px;
  font-weight: 800;
  font-family: 'roboto';
  color: #ffffff;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  cursor: pointer;
  width: 10vw;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-family: 'roboto';
`
