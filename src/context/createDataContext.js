import React, { useEffect, useReducer } from 'react';

const createDataContext = (name, reducer, actions, defaultValue) => {
  const Context = React.createContext();
  const excludes = [];

  let STORED_VALUE = null;
  if (!excludes.includes(name)) STORED_VALUE = localStorage.getItem(name);
  if (STORED_VALUE) STORED_VALUE = JSON.parse(STORED_VALUE);

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, STORED_VALUE || defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    useEffect(() => {
      if (!excludes.includes(name))
        localStorage.setItem(name, JSON.stringify(state));
    }, [state]);

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
