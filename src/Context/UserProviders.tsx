import { createContext, useContext, useState } from 'react';
import { ChatResponse } from '../types/TypesChat';
import {
  getFromLocalStorage,
  saveToLocalStorage,
  saveDarkModeToLocalStorage,
  getDarkModeFromLocalStorage,
  clearLocalStorage
} from '../LocalStorage/LocalStorage';

interface UserContextType {
  darkMode: boolean;
  changeDarkMode: (value: boolean) => void;
  loadDarkMode: () => void;
  listOfMessages: ChatResponse[];
  addMessage?: (message: ChatResponse) => void;
  loadMessages: () => void;
  clearMessages: () => void;
}

const userContext = createContext<UserContextType>({
  darkMode: false,
  changeDarkMode: () => { },
  loadDarkMode: () => { },
  listOfMessages: [],
  addMessage: () => { },
  loadMessages: () => [],
  clearMessages: () => { }
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

  const clearMessages = () => {
    setListOfMessages([]);
    clearLocalStorage("listOfMessages");
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
        loadMessages,
        clearMessages
      }}>
      {children}
    </userContext.Provider>
  );
}