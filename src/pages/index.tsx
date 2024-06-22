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
  const {
    darkMode,
    addMessage,
    listOfMessages,
    loadMessages
  } = useUserContext()

  const getMessages = async () => {
    setIsSearching(true)
    const response: ChatResponse = await GeminisChat(question) as ChatResponse;
    setIsSearching(false)
    if (addMessage) {
      addMessage(response)
    }
  }

  const getQuestions = async (question: string) => {
    const newQuestion: ChatResponse = {
      type: "question",
      text: question,
      speaker: "user",
      finishReason: "",
      safetyRatings: {
        sexuallyExplicit: "",
        hateSpeech: "",
        harrassment: "",
        dangerousContent: ""
      }
    }
    if (addMessage) {
      addMessage(newQuestion);
    }
  }

  useEffect(() => {
    loadMessages()
  }, [])

  useEffect(() => {
    if (question != "") {
      getQuestions(question);
      getMessages()
    }
  }, [question])

  return (
    <div className={`h-screen bg-gray-200 flex flex-col ${darkMode ? 'dark' : 'light'}`}>
      <div className="fixed top-0 left-0 right-0 w-full z-10">
        <Header />
      </div>
      <div className="flex-1 overflow-y-auto p-4 pt-[4.5rem] pb-[4.5rem] dark:bg-black bg-laguna-100"> {/* Ajusta el padding para header y footer */}
        <div className="max-w-screen-lg mx-auto">
          <ul>
            {listOfMessages.map((item, index) => (
              <Bubble key={index} message={item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 w-full p-4 bg-laguna-300 text-white dark:bg-laguna-700 z-10">
        <ChatForm setQuestion={setQuestion} isSearching={isSearching} />
      </div>
    </div>
  )
}

export default Index