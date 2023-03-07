import { useContext } from "react";
import { Ionicons } from '@expo/vector-icons';
import { UserBottomSheetContext } from "../../context/UserBottomSheetContext";
import { ButtonSetting } from "./styles";

export default function ConfigButton() {
  const { OpenButtonSheet } = useContext(UserBottomSheetContext)

  function OpenUserBottomSheet() {
    OpenButtonSheet()
  }

  return (
    <ButtonSetting onPress={OpenUserBottomSheet}>
      <Ionicons name="settings-sharp" size={24} color="black" style={{ marginRight: 20 }} />
    </ButtonSetting>
  )
}