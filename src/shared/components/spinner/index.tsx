import React from 'react';
import classNames from '../../helpers/classNames';
import './spinner.scss';

interface SpinnerProps {
  active: boolean
}

function Spinner(props: SpinnerProps) {
  return (
    <div className={
      classNames(
          {
            spinner: true,
            'spinner--active': props.active
          }
        )
    }>
      <div className="spinner__content"></div>
      <div className="spinner__content"></div>
      <div className="spinner__content"></div>
      <div className="spinner__content"></div>
    </div>
  );
}

export default Spinner;
