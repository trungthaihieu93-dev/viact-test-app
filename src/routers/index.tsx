import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn, SignUp } from '../screens/Authentication';

import { AppContext } from '../contexts/app';
import {
  INDEX_ROUTE_URL,
  PROFILE_ROUTE_URL,
  SIGN_IN_ROUTE_URL,
  SIGN_UP_ROUTE_URL,
} from './routes';

export default function AppRoute() {
  const { isAuthenticated } = useContext(AppContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={INDEX_ROUTE_URL}
          element={isAuthenticated ? <div>Profile</div> : <SignIn />}
        />
        {isAuthenticated ? (
          <Route path={PROFILE_ROUTE_URL} element={<div>Profile</div>} />
        ) : (
          <>
            <Route path={SIGN_IN_ROUTE_URL} element={<SignIn />} />
            <Route path={SIGN_UP_ROUTE_URL} element={<SignUp />} />
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
