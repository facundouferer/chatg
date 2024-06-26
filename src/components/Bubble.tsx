import { BubbleProps } from "../types/TypesChat"
import ReactMarkdown from "react-markdown"
import { Avatar } from "@nextui-org/react"
import avataRobot from "../assets/robot-avatar.svg"
import avatarUser from "../assets/user-avatar.svg"
import { motion } from "framer-motion"

const Bubble: React.FC<BubbleProps> = ({ message }) => {
  return (
    <div className="flex flex-col mt-2">
      {message.type === "question" ? (
        <>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-laguna-50 mt-2 mb-4 p-5 rounded-xl max-w-screen-md content-end  dark:bg-laguna-800 dark:text-gray-200 text-laguna-800 ml-auto">
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
            <div className="mt-5">
              <Avatar isBordered className="bg-laguna-100 dark:bg-laguna" src={avatarUser} />
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mt-5">
              <Avatar isBordered className="bg-laguna-100 dark:bg-laguna" src={avataRobot} />
            </div>
            <div className="bg-laguna-100 mt-2 mb-4 p-5 rounded-xl max-w-screen-md dark:bg-laguna-800 dark:text-gray-200 text-laguna-950 mr-auto">
              <ReactMarkdown>{message.text}</ReactMarkdown>
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

export default Bubble;