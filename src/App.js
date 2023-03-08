import React, { useState } from 'react';
import "./style.css"
import {InputTodo} from './components/InputTodo'
function App() {
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const [todoText, setTodoText] = useState('');
  const [editText, setEditText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(0);

  const onChangeTodoText = (event) => {
    setTodoText(event.target.value)
  };

  const onChangeEdit = (event) => {
    setEditText(event.target.value)
  };

  const onClickEdit = (todo, index) => {
    setIsEditing(true);
    setEditText(todo);
    setIndex(index)
    }

  const onClickEditButton = () => {
    const newTodos = [...incompleteTodos, editText];
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos);
    onClickEditBack();
  }

  const onClickEditBack = () => {
    setIsEditing(false);
  }

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

    const onClickBack = (index) => {
      const deleteComplete = [...completeTodos];
      deleteComplete.splice(index, 1);

      const newIncomplete = [...incompleteTodos, completeTodos[index]];
      setIncompleteTodos(newIncomplete);
      setCompleteTodos(deleteComplete);
    }


  return (
    <>
    <InputTodo todoText={todoText} editText={editText} isEditing={isEditing} onEdit={onChangeEdit} onClickEdit={onClickEditButton} onClickEditBack={onClickEditBack} onChangeTodo={onChangeTodoText} addNewTask={addNewTask}/>

    <div className="incomplete-area">
      <p className="title">未完了リスト</p>
      <ol>
      {incompleteTodos.map((todo, index) => {
        return(
          <li key={todo}>
          <div className="list-row">
          <p>{todo}</p>
          <button className="button" onClick={() => deleteTask(index)}>削除</button>
          <button className="button" onClick={() => completeTask(index)}>完了</button>
          <button className="button" onClick={() => onClickEdit(todo, index)}>編集</button>
          </div>
        </li>
        );
      })}       
      </ol>
    </div>
    <div className="complete-area">
      <p className="title">完了リスト</p>
      <ol>
        {completeTodos.map((todo, index) => {
          return(
            <li key={todo}>
            <div className="list-row">
            <p>{todo}</p>
            <button className="button" onClick={() => onClickBack(index)}>戻す</button>
            </div>
          </li>
          );
        })}
      </ol>
    </div>
    </>
  );
};

export default App;