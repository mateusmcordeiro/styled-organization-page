import React, { useState } from 'react';
import Input from '../../shared/components/input';
import { PagesContext } from '../../shared/contexts/PagesContext';
import './Search.scss';



function Search() {

  const [loading, setLoading] = useState<boolean>(false);

  const [organizationName, setOrganizationName] = useState<string>('');
  
  return (
    <PagesContext.Consumer>
      { ({slickRef}) => {
        return (
          <div className="app__page">
            <Input
              onChangeInput={
                (e) => {
                  setOrganizationName(e.target.value)
                }
              }
              onClickButton={
                (e) => {
                  setLoading(true);
                  setTimeout(() => {
                    slickRef.slickGoTo(1);
                  },3000);
                }
              }
              
              loading={ loading }
              selfValue={ organizationName }
            ></Input>
          </div>      
        )
      }}
    </PagesContext.Consumer>
    
  );
}

export default Search;
