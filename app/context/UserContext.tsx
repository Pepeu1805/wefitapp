import { createContext, ReactNode, useState } from "react";

type UserContextType = {
  username: string; setUsername: (newState: string) => void,
}

const InitialValues = {
  username: "", setUsername: () => { },
}

export const UserContext = createContext<UserContextType>(InitialValues)

type userProviderProps = {
  children: ReactNode
}

const UserContextProvider = ({ children }: userProviderProps) => {
  const [username, setUsername] = useState(InitialValues.username);

  return (
    <UserContext.Provider
      value={{
        username, setUsername,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;