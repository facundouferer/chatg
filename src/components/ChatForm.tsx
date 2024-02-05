import React, { useState } from 'react';

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
    <div className="className='h-30 bg-pistachio-300 p-4 text-white dark:bg-pistachio-700">
      <form
        onSubmit={handleSubmit}
        className="flex">
        <input
          className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"
          aria-label="Filter projects"
          type="text"
          placeholder="Write your question"
          value={textQuestion}
          onChange={(e) => setTextQuestion(e.target.value)}
          disabled={isSearching}
        />
        <button
          type="submit"
          disabled={isSearching}
          className="dark:bg-pistachio-950 ml-3 hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
        >{!isSearching ? "Send" : "thinking"}</button>
      </form>
    </div>
  );
};

export default ChatForm;
