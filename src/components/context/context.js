import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [dark, setDark] = useState(false);
  return (
    <Context.Provider value={{ dark, setDark }}>{children}</Context.Provider>
  );
};

const UseglobalHook = () => {
  return useContext(Context);
};

export { Provider, UseglobalHook };
