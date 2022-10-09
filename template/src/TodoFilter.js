import React, { useState, useEffect } from 'react';

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
    <div>
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
  );
};

export default TodoFilter;
