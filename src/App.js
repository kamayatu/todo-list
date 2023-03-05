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
    if(todoText !== '') {
    const newTodos = [...incompleteTodos, todoText]
    setIncompleteTodos(newTodos);
    setTodoText('');
  }};

  const deleteTask = (index) => {
    const deletedTask = [...incompleteTodos];
    // setIncompleteTodos(deletedTask.splice(index, 1)) なんでうごかない？
    deletedTask.splice(index, 1);
    setIncompleteTodos(deletedTask);
  }

  const completeTask = (index) => {
    const newDeletedTask = [...incompleteTodos];
    newDeletedTask.splice(index, 1);

    const newCompleteTask = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newDeletedTask);
    setCompleteTodos(newCompleteTask);
    // alert(index)
  }

  return (
    <>
    <div className="input-area">
      <input value={todoText} onChange={onChangeTodoText} placeholder="todoを入力" />
      <button className="button" onClick={addNewTask}>追加</button>
    </div>

    <div className="incomplete-area">
      <p className="title">未完了リスト</p>
      <ul>
      {incompleteTodos.map((todo, index) => {
        return(
          <li key={todo}>
          <div className="list-row">
          <p>{todo}</p>
          <button className="button" onClick={() => deleteTask(index)}>削除</button>
          <button className="button" onClick={() => completeTask(index)}>完了</button>
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