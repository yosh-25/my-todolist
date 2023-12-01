import React, { useState } from "react";
// import "normalize.css";←今回は断念。
// import { v4 as uuidv4 } from "uuid";←今回は断念。

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoId, setTodoId] = useState(0);

  const onClickAdd = () => {
    if (todo !== "") {
      // setTodos(todos.concat([todo]));
      const newTodo = {
        id: todoId,
        name: todo,
        status: "未着手",
      };
      // console.log(todoId)
      todos.push(newTodo);
      const newTodos = [...todos];
      setTodos(newTodos);
      setTodoId(todoId + 1);
      setTodo("");
    }
  };

  const onClickSwitch = (todoId) => {
    const switchTodos = [...todos];
    if (switchTodos[todoId].status === "未着手") {
      switchTodos[todoId].status = "作業中";
    } else if (switchTodos[todoId].status === "作業中") {
      switchTodos[todoId].status = "未着手";
    }
    setTodos(switchTodos);
  };

  // ググって持ってきて機能したが理解が怪しい。。
  const onClickDelete = (todoId) => {
    setTodos(todos.slice(0, todoId).concat(todos.slice(todoId + 1)));
  };

  // CSS
  const h1Style = {
    fontSize: "50px",
    width: "30%",
    margin: "50px auto 0 80px",
    padding: "8px",
    textAlign: "center",
    borderRadius: "30px",
    backgroundColor: "#c5e1a5",
  };

  const divInputStyle = {
    fontSize: "10px",
    width: "50%",
    margin: "0 auto 0 80px",
    textAlign: "left",
    height: "100px",
    lineHeight: "100px",
  };

  const inputAreaStyle = {
    display: "inline-block",
    verticalAlign: "middle",
  };

  const h2Style = {
    fontSize: "40px",
    width: "30%",
    margin: "0 auto 0 80px",
    textAlign: "center",
    padding: "5px",
    borderRadius: "30px",
    backgroundColor: "#c5e1a5",
  };

  const ulStyle = {
    fontSize: "10px",
    width: "50%",
    margin: "0 auto 0 50px",
    textAlign: "left",
    height: "50px",
    lineHeight: "50px",
  };

  const ulButtonStyle = {
    marginLeft: "5px",
  };

  const textareaStyle = {
    marginLeft: "5px",
  };

  return (
    <>
      <div style={{ width: "1000px" }}>
        <h1 style={h1Style}>ToDoリスト</h1>
        <div style={divInputStyle}>
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="ここに入力"
            style={inputAreaStyle}
          />
          <button onClick={onClickAdd} style={inputAreaStyle}>
            追加
          </button>
        </div>
        <h2 style={h2Style}> Todo一覧</h2>
        <ul style={ulStyle}>
          {todos.map((todo, todoId) => (
            <li key={todoId}>
              {todo.id}
              {todo.name}
              <button
                style={ulButtonStyle}
                onClick={() => onClickSwitch(todoId)}
              >
                {todo.status}
              </button>
              <button onClick={() => onClickDelete(todoId)}>完了</button>
              <input
                style={textareaStyle}
                type="textarea"
                placeholder="詳細"
              ></input>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
