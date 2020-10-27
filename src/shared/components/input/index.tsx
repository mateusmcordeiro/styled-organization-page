import React from 'react';
import './input.scss';

function Input() {
  return (
    <span className="inputGroup">
      <input className="inputGroup__input" id="myInput" type="text" placeholder="Ex: Facebook" />
      <label className="inputGroup__label" htmlFor="myInput">Organization Name</label>
    </span>
  );
}

export default Input;
