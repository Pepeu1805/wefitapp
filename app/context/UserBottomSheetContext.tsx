import { createContext, ReactNode, useRef } from "react";
import { Modalize } from "react-native-modalize";
import UserBottomSheetContents from "../components/UserBottomSheet";

type UserBottomSheetContextType = {
  OpenButtonSheet: () => void,
  UserBottomSheet: () => any,
  CloseButtonSheet: () => any,
}

const InitialValues = {
  OpenButtonSheet: () => { },
  UserBottomSheet: () => (<></>),
  CloseButtonSheet: () => (<></>),
}

export const UserBottomSheetContext = createContext<UserBottomSheetContextType>(InitialValues)

type userProviderProps = {
  children: ReactNode
}

const UserBottomSheetContextProvider = ({ children }: userProviderProps) => {

  function OpenButtonSheet() {
    modilizeRef.current?.open()
  }
  function CloseButtonSheet() {
    modilizeRef.current?.close()
  }
  const modilizeRef = useRef<Modalize>(null);

  const UserBottomSheet = () => {

    return (
      <Modalize ref={modilizeRef} snapPoint={180} adjustToContentHeight={true}>
        <UserBottomSheetContents />
      </Modalize>
    )
  }

  return (
    <UserBottomSheetContext.Provider
      value={{
        OpenButtonSheet,
        UserBottomSheet,
        CloseButtonSheet
      }}
    >
      {children}
    </UserBottomSheetContext.Provider>
  )
}

export default UserBottomSheetContextProvider;