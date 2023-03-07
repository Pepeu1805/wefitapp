import { useContext, useState } from "react";
import { Text } from "react-native";
import { UserBottomSheetContext } from "../../context/UserBottomSheetContext";
import { UserContext } from "../../context/UserContext";
import { ApiGitHub } from "../../services/ApiGitHub";
import { Container, LabelInput, ButtonContainer, ButtonSave, ButtonCancel, TextButtonCancel, TextButtonSave, InputContainer, UserInput } from "./styles";

export default function UserBottomSheetContents() {
  const [userNameInput, setUserNameInput] = useState('');
  const { CloseButtonSheet } = useContext(UserBottomSheetContext)
  const { setUsername } = useContext(UserContext)

  function handleCloseButtonSheet() {
    CloseButtonSheet()
  }

  async function updateUsername() {
    await ApiGitHub.get(`/users/${userNameInput}`)
      .then(response => {
        setUsername(userNameInput)
        handleCloseButtonSheet()
      })
  }

  return (
    <Container>
      <Text>Alterar usuário selecionado</Text>

      <InputContainer>
        <LabelInput>Nome do usuário</LabelInput>
        <UserInput
          value={userNameInput.replace(/\s/g, '')}
          onChangeText={(userName) => setUserNameInput(userName.replace(/\s/g, ''))}
          autoCapitalize='none'
        />
      </InputContainer>
      <ButtonContainer>
        <ButtonCancel onPress={handleCloseButtonSheet}>
          <TextButtonCancel> CANCELAR </TextButtonCancel>
        </ButtonCancel>

        <ButtonSave onPress={updateUsername}>
          <TextButtonSave> SALVAR </TextButtonSave>
        </ButtonSave>

      </ButtonContainer>
    </Container>
  )
}