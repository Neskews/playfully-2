import React from "react";

const createContext = state => React.createContext(state);

const Provider = ({ children, state }) => {
  const ctx = createContext(state);

  return (
      <ctx.Provider>

      </ctx.Provider>
  )
};
