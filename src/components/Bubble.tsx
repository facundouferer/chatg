import { BubbleProps } from "../types/TypesChat";
import ReactMarkdown from "react-markdown";

const Bubble: React.FC<BubbleProps> = ({ message }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-pistachio w-2/3 mt-2 mb-4 p-5 rounded-xl max-w-screen-md dark:bg-pistachio-800 dark:text-pistachio-50 text-pistachio-950">
        <ReactMarkdown>{message.text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Bubble;
