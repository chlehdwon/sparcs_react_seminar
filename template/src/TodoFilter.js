import React, { useState, useEffect } from 'react';
import './App.css';

const TodoFilter = ({ handleChange }) => {
  const [checked, setChecked] = useState({ 1: true, 2: true, 3: true });

  const onChange = (e) => {
    setChecked({ ...checked, [e.target.name]: e.target.checked });
    handleChange({
      ...checked,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <container>
      <div className="Filter">
        <h2>중요도로 필터링도 할 수 있습니다</h2>
        <input
          onChange={onChange}
          checked={checked[1]}
          type="checkbox"
          id="importanceLow"
          name="1"
        ></input>
        <label htmlFor="importanceLow">낮음</label>
        <input
          onChange={onChange}
          checked={checked[2]}
          type="checkbox"
          id="importanceMid"
          name="2"
        ></input>
        <label htmlFor="importanceMid">중간</label>
        <input
          onChange={onChange}
          checked={checked[3]}
          type="checkbox"
          id="importanceHigh"
          name="3"
        ></input>
        <label htmlFor="importanceHigh">높음</label>
      </div>
      <div>
        <hr class="one"></hr>
      </div>
    </container>
  );
};

export default TodoFilter;
