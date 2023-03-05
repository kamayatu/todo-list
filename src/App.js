import React, { useState } from 'react';
import "./style.css"
function App() {
  const [incompleteTodos, setIncompleteTodos] = useState(['ああああ','いいいい']);
  const [completeTodos, setCompleteTodos] = useState(['うううう']);
  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  };

  const addNewTask = () => {
    if(todoText !== ''){
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos);
    setTodoText('');
  }};

  return (
    <>
    <div className="input-area">
      <input value={todoText} onChange={onChangeTodoText} placeholder="todoを入力" />
      <button className="button" onClick={addNewTask}>追加</button>
    </div>

    <div className="incomplete-area">
      <p className="title">未完了リスト</p>
      <ul>
      {incompleteTodos.map((todo) => {
        return(
          <li key={todo}>
          <div className="list-row">
          <p>{todo}</p>
          <button className="button">編集</button>
          <button className="button">完了</button>
          </div>
        </li>
        );
      })}       
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了リスト</p>
      <ul>
        {completeTodos.map((todo) => {
          return(
            <li key={todo}>
            <div className="list-row">
            <p>{todo}</p>
            <button className="button">戻す</button>
            </div>
          </li>
          );
        })}
      </ul>
    </div>
    </>
  );
};

export default App;