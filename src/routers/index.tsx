import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from '../screens/Authentication';

import { AppContext } from '../contexts/app';

export default function AppRoute() {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <Route path="profile" element={<div>Profile</div>} />
        ) : (
          <>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="sign-up" element={<SignUp />} />
          </>
        )}

        {/* <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route>
      </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
