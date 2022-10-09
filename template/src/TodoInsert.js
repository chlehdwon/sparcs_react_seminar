import React, { useState, useEffect } from 'react';

const TodoInsert = ({ handleSubmit }) => {
  const [message, setMessage] = useState('');
  const [todo, setTodo] = useState({
    title: '',
    content: '',
    due: '',
    importance: 2,
  });
  const handleChange = (e) => {
    e.preventDefault();
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!todo.title) {
      setMessage('제목을 입력해주세요');
      return;
    }
    if (!todo.due) {
      setMessage('기한을 입력해주세요');
      return;
    }
    handleSubmit(todo);
    setMessage('');
    setTodo({
      title: '',
      content: '',
      due: '',
      importance: 2,
    });
  };

  return (
    <div>
      <h2> 투두 리스트를 추가해주세요! (제목, 기한, 중요도 입력필수) </h2>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" value={todo.title} onChange={handleChange} />
        <br />
        <input type="text" name="content" value={todo.content} onChange={handleChange} />
        <br />
        <input type="date" name="due" value={todo.due} onChange={handleChange} />
        <br />
        <input
          id="todoImportance"
          type="range"
          name="importance"
          value={todo.importance}
          min="1"
          max="3"
          onChange={handleChange}
        />
        <label htmlFor="todoImportance">1:낮음 2:중간 3:높음</label>
        <br />
        <button type="submit">Add Todo list</button>
        {message ? <p> {message} </p> : <></>}
      </form>
    </div>
  );
};

export default TodoInsert;
