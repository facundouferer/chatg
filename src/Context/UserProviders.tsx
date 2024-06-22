import { createContext, useContext, useState } from 'react';
import { ChatResponse } from '../types/TypesChat';
import { getFromLocalStorage, saveToLocalStorage, saveDarkModeToLocalStorage, getDarkModeFromLocalStorage } from '../LocalStorage/LocalStorage';

interface UserContextType {
  darkMode: boolean;
  changeDarkMode: (value: boolean) => void;
  loadDarkMode: () => void;
  listOfMessages: ChatResponse[];
  addMessage?: (message: ChatResponse) => void;
  loadMessages: () => void;
}

const userContext = createContext<UserContextType>({
  darkMode: false,
  changeDarkMode: () => { },
  loadDarkMode: () => { },
  listOfMessages: [],
  addMessage: () => { },
  loadMessages: () => []
});



export const useUserContext = () => useContext(userContext);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

  const [darkMode, setDarkMode] = useState<boolean>(false)
  const [listOfMessages, setListOfMessages] = useState<ChatResponse[]>([])

  const addMessage = (message: ChatResponse) => {
    setListOfMessages(prevList => {
      const newList = [...prevList, message];
      saveToLocalStorage("listOfMessages", newList);
      return newList;
    });
  };

  const loadMessages = () => {
    const messages = getFromLocalStorage("listOfMessages");
    if (messages) {
      setListOfMessages(messages)
    }
  }

  const changeDarkMode = (value: boolean) => {
    setDarkMode(value);
    saveDarkModeToLocalStorage("darkMode", value);
  }

  const loadDarkMode = () => {
    const darkMode = getDarkModeFromLocalStorage("darkMode");
    if (darkMode) {
      setDarkMode(darkMode)
    }
  }


  return (
    <userContext.Provider
      value={{
        darkMode,
        changeDarkMode,
        loadDarkMode,
        listOfMessages,
        addMessage,
        loadMessages
      }}>
      {children}
    </userContext.Provider>
  );
}