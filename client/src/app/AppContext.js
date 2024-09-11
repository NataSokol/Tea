import { createContext } from 'react';

const initState = {
  user: null,
  setUser: () => {},
};

export const AppContext = createContext(initState);