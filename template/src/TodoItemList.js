import React from 'react';

const importanceMap = { 1: '낮음', 2: '중간', 3: '높음' };

const TodoItemList = ({ id, title, content, due, importance, onRemove }) => {
  const onClick = () => {
    onRemove(id);
  };
  return (
    <div className="Todo">
      <h4 className="todo--title">{title}</h4>
      <p className="todo--content">할일: {content}</p>
      <p className="todo--due">기한: {due}</p>
      <p className="todo--importance">중요도: {importanceMap[importance]}</p>
      <button onClick={onClick}>Delete</button>
    </div>
  );
};

export default TodoItemList;
