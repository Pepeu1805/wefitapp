import styled from "styled-components/native";

export const Container = styled.View`
  flex: 0.9;
  flex-direction: column;
  background-color:${({ theme }) => theme.COLOR.BACKGROUND};
  padding: 38px 10px;
`
export const InputContainer = styled.View`
  flex-direction: column;
  margin: 10px 0px;
  background: rgba(0, 0, 0, 0.06);
`

export const UserInput = styled.TextInput`
  margin:  10px;
`

export const LabelInput = styled.Text`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.6);
`

export const ButtonContainer = styled.View`
  flex-direction: row;  
`

export const ButtonCancel = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  align-items: center;
  padding:  10px 0px;
  border-radius: 4px;
  flex: 0.5;
`

export const TextButtonCancel = styled.Text`
  color: ${({ theme }) => theme.COLOR.SECUNDARY};
`

export const ButtonSave = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR.SECUNDARY};
  padding:  10px 0px;
  border-radius: 4px;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  flex: 0.5;
`

export const TextButtonSave = styled.Text`
  color: ${({ theme }) => theme.COLOR.BACKGROUND};
`