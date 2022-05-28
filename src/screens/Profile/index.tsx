import React, { useContext } from 'react';

import { AppContext } from '../../contexts/app';

export default function Profile() {
  const { user } = useContext(AppContext);

  return <div></div>;
}
