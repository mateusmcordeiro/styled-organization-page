import React from 'react';
import Input from '../../shared/components/input';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Input
          onChange={(e) => {console.log(e)}}
          loading={true}
        ></Input>
      </header>
    </div>
  );
}

export default App;
