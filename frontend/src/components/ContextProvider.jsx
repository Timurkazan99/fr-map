import React, {createContext} from 'react';
import setupStore from "../store";
import {Provider} from "react-redux";


export const Context = createContext(null);
const store = setupStore();

const ContextProvider = ({ children }) => {

  return (
    <Context.Provider value={Context}>
      <Provider store={store}>
        {children}
      </Provider>
    </Context.Provider>
  );
};

export default ContextProvider;