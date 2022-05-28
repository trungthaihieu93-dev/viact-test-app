import * as React from 'react';

import { User, initialUser } from '../../core/interfaces/user';

export interface AppContextInterface {
  user: User;
}

export const AppContext = React.createContext<AppContextInterface>({
  user: initialUser,
});

export default function AppProvider({ children }: any) {
  return (
    <AppContext.Provider value={{ user: initialUser }}>
      {children}
    </AppContext.Provider>
  );
}
