import React from 'react';
import classNames from '../../helpers/classNames';
import Spinner from '../spinner';
import './input.scss';
import { FiChevronRight } from "react-icons/fi";

interface InputProps {
  loading: boolean,
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void,
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  onClickButton?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  selfValue?: string,
  reference?: any
}

function Input({ loading, onChangeInput = () => {}, onClickButton = () => {}, onKeyDown = () => {}, selfValue = '', reference = {} }: InputProps) {
  return (
    <div className='inputGroup'>
      <button 
        className={
          classNames({
            inputGroup__button: true,
            'inputGroup__button--active': selfValue.length > 0,
            'inputGroup__button--disabled': loading
          })
        }
        onClick={ onClickButton }
      >
        <FiChevronRight size={30}></FiChevronRight>
      </button>
      <input 
        className={
          classNames({
            inputGroup__input: true,
            'inputGroup__input--disabled': loading
          })
        }
        onKeyDown={ onKeyDown }
        onChange={ onChangeInput }
        id='myInput'
        type='text'
        placeholder='Ex: Facebook'
        ref={reference}
      />
      <label className='inputGroup__label' htmlFor='myInput'>
        { loading ? selfValue : 'Organization Name' }
        <Spinner active={loading}></Spinner>
      </label>
    </div>
  );
}

export default Input;
