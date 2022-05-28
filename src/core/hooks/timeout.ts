import { useEffect } from 'react';

export const useDebounceHooks = () => {
  useEffect(() => {
    console.log('hook');
  }, []);
};
