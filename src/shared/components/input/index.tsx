import React from 'react';
import classNames from '../../helpers/classNames';
import Spinner from '../spinner';
import './input.scss';

interface InputProps {
  loading: boolean,
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({ loading, onChange }: InputProps) {
  return (
    <span className="inputGroup">
      <input 
        className={
          classNames({
            inputGroup__input: true,
            'inputGroup__input--disabled': loading
          })
        }
        onChange={ onChange }
        id="myInput"
        type="text"
        placeholder="Ex: Facebook"
      />
      <label className="inputGroup__label" htmlFor="myInput">
        { loading ? 'teste' : 'Organization Name' }
        <Spinner active={loading}></Spinner>
      </label>
    </span>
  );
}

export default Input;
