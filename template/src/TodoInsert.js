import React, { useState } from 'react';
import './App.css';

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
    <container>
      <div className="InsertHead">
        <h2> 새로운 TODO를 추가해주세요!</h2>
        <h5> 제목, 기한, 중요도는 필수입니다 </h5>
      </div>
      <div className="Insert">
        <form onSubmit={onSubmit}>
          <label htmlFor="todoTitle">제목: </label>
          <input
            id="todoTitle"
            type="text"
            name="title"
            value={todo.title}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="todoContent">할일: </label>
          <input
            id="todoContent"
            type="text"
            name="content"
            value={todo.content}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="todoDue">기한: </label>
          <input id="todoDue" type="date" name="due" value={todo.due} onChange={handleChange} />
          <br />
          <label htmlFor="todoImportance">중요도: </label>
          <input
            id="todoImportance"
            type="range"
            name="importance"
            value={todo.importance}
            min="1"
            max="3"
            onChange={handleChange}
          />
          <p>(1:낮음 2:중간 3:높음)</p>
          <button type="submit">Add Todo list</button>
          {message ? <p id="errorMessage"> {message} </p> : <></>}
        </form>
      </div>
      <div>
        <hr class="one"></hr>
      </div>
    </container>
  );
};

export default TodoInsert;
