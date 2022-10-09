import React, { useState, useRef } from 'react';
import TodoItemList from './TodoItemList';
import TodoInsert from './TodoInsert';
import TodoFilter from './TodoFilter';
import TodoHeader from './TodoHeader';
import './App.css';

const App = () => {
  const cnt = useRef(4);
  const [todofilter, setTodoFilter] = useState({ 1: true, 2: true, 3: true });
  const [todolists, setTodolists] = useState([
    {
      id: 1,
      title: '나만의 투두리스트 만들기',
      content: 'SPARCS 리액트 세미나 과제',
      due: '2022-10-15',
      importance: 3,
      show: 'true',
    },
    {
      id: 2,
      title: '데이터베이스 중간공부',
      content: 'SQL과 함께 즐거운 시간',
      due: '2022-10-19',
      importance: 1,
      show: 'true',
    },
  ]);
  const handleSubmit = (submit) => {
    const todo = {
      id: cnt.current,
      title: submit.title,
      content: submit.content,
      due: submit.due,
      importance: submit.importance,
    };
    cnt.current++;
    setTodolists(todolists.concat(todo));
  };
  const handleChange = (change) => {
    console.log(change);
    setTodoFilter(change);
  };
  const onRemove = (id) => {
    setTodolists(todolists.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <TodoHeader></TodoHeader>
      <TodoInsert handleSubmit={handleSubmit}></TodoInsert>
      <TodoFilter handleChange={handleChange} filter={todofilter} />
      {todolists
        .filter((todo) => todofilter[todo.importance])
        .map((todo) => (
          <TodoItemList
            id={todo.id}
            title={todo.title}
            content={todo.content}
            due={todo.due}
            importance={todo.importance}
            key={todo.id}
            onRemove={onRemove}
          />
        ))}
    </div>
  );
};

export default App;
