import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { PROFILE_QUERY } from '../../../core/API/constants/query';
import { User } from '../../../core/interfaces/user';
import { getProfile } from '../../../services/user';
import storage from '../../../utils/storage';

const useAuthHooks = () => {
  const [isAuthenticated, setAuthentication] = useState(false);
  const { data: user } = useQuery<User>(PROFILE_QUERY, () => getProfile(), {
    initialData: undefined,
  });

  useEffect(() => {
    if (user) {
      setAuthentication(true);
    }
  }, [user]);

  const logout = () => {
    storage.set('jwt', null);
    setAuthentication(false);
  };

  return {
    isAuthenticated,
    user,
    logout,
  };
};

export default useAuthHooks;
