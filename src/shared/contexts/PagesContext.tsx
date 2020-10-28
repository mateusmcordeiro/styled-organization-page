import React, { createContext, useState } from 'react';

export const PagesContext = createContext<Partial<any>>({});

export function PagesContextProvider(props: any) {

  const [ loading, setLoading ] = useState<boolean>(false);

  const [ slickRef, setSlickRef ] = useState<any>();

  const [ organization, setOrganization ] = useState<any>();

  return (
    <PagesContext.Provider value={ 
      { 
        loading,
        setLoading,
        slickRef, 
        setSlickRef,
        organization,
        setOrganization
      }
    }>
      { props.children }
    </PagesContext.Provider>
  );
}
