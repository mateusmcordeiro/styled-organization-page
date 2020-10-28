import React, { useState } from 'react';
import Input from '../../shared/components/input';
import './App.scss';



function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [organizationName, setOrganizationName] = useState<string>('');

  return (
    <div className="App">
      <header className="App-header">
        <Input
          onChangeInput={
            (e) => {
              setOrganizationName(e.target.value)
            }
          }
          onClickButton={
            (e) => {
              setLoading(true);
            }
          }
          loading={loading}
          selfValue={organizationName}
        ></Input>
      </header>
    </div>
  );
}

export default App;
