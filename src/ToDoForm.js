import { useRef, useState } from "react";

const ToDoForm = (props) => {
  const [userInput, setUserInput] = useState("");

  let inputRef = useRef();

  const handleChange = () => {
    setUserInput(inputRef.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={userInput}
        placeholder="Введите значение..."
        onChange={handleChange}
      />
      <button>Добавить</button>
    </form>
  );
};

export default ToDoForm;
