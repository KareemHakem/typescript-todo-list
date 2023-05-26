import React, { useRef } from 'react';
import '../style.css';

interface todoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTodo: (e: React.FormEvent) => void;
}

const InputFelid = ({ todo, setTodo, handleAddTodo }: todoProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTodo(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="input__box"
      />
      <button className="input_submit">Go</button>
    </form>
  );
};

export default InputFelid;
