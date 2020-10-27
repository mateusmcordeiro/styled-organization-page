import React from 'react';
import Spinner from '../spinner';
import './input.scss';

function Input() {
  return (
    <span className="inputGroup">
      <input className="inputGroup__input" id="myInput" type="text" placeholder="Ex: Facebook" />
      <label className="inputGroup__label" htmlFor="myInput">Organization Name <Spinner active={true}></Spinner></label>
    </span>
  );
}

export default Input;
