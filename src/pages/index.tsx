import GeminisChat from "../services/google"
import { useEffect, useState } from "react";
import Bubble from "../components/Bubble";
import ChatForm from "../components/ChatForm";
import { ChatResponse } from "../types/TypesChat"
import Header from '../components/Header'
import { useUserContext } from "../Context/UserProviders"

const Index = () => {

  const [question, setQuestion] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const { darkMode, listOfMessages, addMessage } = useUserContext()

  useEffect(() => {
    const getMessages = async () => {
      setIsSearching(true)
      const response: ChatResponse = await GeminisChat(question) as ChatResponse;
      addMessage && addMessage(response)
      console.log(response)
      setIsSearching(false)
    }
    if (question) {
      getMessages();
    }
  }, [question])

  return (
    <div className={`h-screen bg-gray-200 flex flex-col ${darkMode ? 'dark' : 'light'}`}>
      <Header />
      <div className="flex-1 overflow-y-auto p-4 dark:bg-black bg-pistachio-100">
        <ul>
          {listOfMessages.map((response, index) => (
            <li key={index}>
              <Bubble message={response} />
            </li>
          ))}
        </ul>
      </div>
      <ChatForm setQuestion={setQuestion} isSearching={isSearching} />
    </div>
  )
}

export default Index