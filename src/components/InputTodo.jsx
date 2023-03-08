import React from 'react';

export const InputTodo = (props) => {
  const { todoText,editText ,isEditing ,onEdit, onClickEdit, onClickEditBack, onChangeTodo, addNewTask} = props
  return(
    <div className="input-area"> 
    
    {isEditing? (
      <>
    <input value={editText} onChange={onEdit} placeholder="編集入力" />
    <button className="button" onClick={onClickEdit}>編集</button>
    <button className="button" onClick={onClickEditBack}>キャンセル</button>
    </>
    ) : (
      <>
    <input value={todoText} onChange={onChangeTodo} placeholder="todoを入力" />
    <button className="button" onClick={addNewTask}>追加</button>
      </>
    )}


  </div>
  );
};