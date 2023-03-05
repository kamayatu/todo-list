import React from 'react';
import "./style.css"
function App() {
  return (
    <>
    <div className="input-area">
      <input placeholder="todoを入力" />
      <button className="button">追加</button>
    </div>
    <div className="incomplete-area">
      <p className="title">未完了リスト</p>
      <ul>
        <li>
          <div className="list-row">
          <p>項目</p>
          <button className="button">編集</button>
          <button className="button">完了</button>
          </div>
        </li>
      </ul>
    </div>
    <div className="complete-area">
      <p className="title">完了リスト</p>
      <ul>
        <li>
          <div className="list-row">
          <p>項目</p>
          <button className="button">戻す</button>
          </div>
        </li>
      </ul>
    </div>
    </>
  );
};

export default App;