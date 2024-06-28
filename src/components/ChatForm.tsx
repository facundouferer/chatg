import React, { useState } from 'react';
import { Button, Tooltip, Input } from "@nextui-org/react";
import sendIcon from "../assets/send-icon.svg";

interface ChatFormProps {
  setQuestion: React.Dispatch<React.SetStateAction<string>>;
  isSearching: boolean;
}

const ChatForm: React.FC<ChatFormProps> = ({ setQuestion, isSearching }) => {

  const [textQuestion, setTextQuestion] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuestion(textQuestion);
    setTextQuestion('');
  };


  return (
    <div className="flex justify-center items-center">
      <div className="max-w-screen-lg w-full">
        <form
          onSubmit={handleSubmit}
          className="flex">
          <Input
            size='sm'
            type="text"
            label="Escribe tu pregunta..."
            value={textQuestion}
            onChange={(e) => setTextQuestion(e.target.value)}
            disabled={isSearching}
          />
          <Tooltip showArrow={true} content="Enter para enviar tu pregunta">
            <Button
              size="lg"
              type="submit"
              disabled={isSearching}
              className="ml-2 flex items-center pl-1 pr-1 bg-laguna-100 dark:bg-laguna-600 dark:text-laguna-50 text-laguna-950"
              isLoading={isSearching}
            >
              {!isSearching ? (
                <img src={sendIcon} alt="send" className="w-6 h-6" />
              ) : ""}
            </Button>
          </Tooltip>
        </form>
      </div>
    </div>
  );
};

export default ChatForm;