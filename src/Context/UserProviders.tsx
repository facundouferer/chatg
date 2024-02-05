import { createContext, useContext, useState } from 'react';
import { ChatResponse } from '../types/TypesChat';

interface UserContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  listOfMessages: ChatResponse[];
  addMessage?: (message: ChatResponse) => void;
}

const userContext = createContext<UserContextType>({
  darkMode: false,
  setDarkMode: () => { },
  listOfMessages: [],
  addMessage: () => { }
});

export const useUserContext = () => useContext(userContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [listOfMessages, setListOfMessages] = useState<ChatResponse[]>([])

  const addMessage = (message: ChatResponse) => {
    setListOfMessages([...listOfMessages, message])
  }

  return (
    <userContext.Provider
      value={{
        darkMode,
        setDarkMode,
        listOfMessages,
        addMessage
      }}>
      {children}
    </userContext.Provider>
  );
}