import React, {createContext} from 'react';


export const Context = createContext(null);

const ContextProvider = ({ children }) => {


  return (
    <Context.Provider>
        {children}
    </Context.Provider>
  );
};

export default ContextProvider;