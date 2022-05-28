import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from '../screens/Authentication';

export default function AppRoute() {
  const isAuthenticated = false;

  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? null : (
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
