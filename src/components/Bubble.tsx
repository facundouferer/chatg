import { BubbleProps } from "../types/TypesChat";
import ReactMarkdown from "react-markdown";

const Bubble: React.FC<BubbleProps> = ({ message }) => {
  return (
    <div className="flex flex-col">
      {message.type === "question" ? (
        <div className="bg-laguna-300 mt-2 mb-4 p-5 rounded-xl max-w-screen-md content-end dark:bg-laguna-600 dark:text-laguna-50 text-laguna-800 ml-auto">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>
      ) : (
        <div className="bg-laguna mt-2 mb-4 p-5 rounded-xl max-w-screen-md dark:bg-laguna-800 dark:text-laguna-50 text-laguna-950 mr-auto">
          <ReactMarkdown>{message.text}</ReactMarkdown>
        </div>
      )}
    </div>
  )
}

export default Bubble;