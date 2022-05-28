import { useState } from 'react';

const useAuthHooks = () => {
  const [isAuthenticated, setAuthentication] = useState(false);

  return {
    isAuthenticated,
    setAuthentication,
  };
};

export default useAuthHooks;
