import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SignIn, SignOut, LandingPage, Dashboard } from './components/pages';
import { auth } from './utils';

function App() {

  const [authenticated] = useState<boolean>(auth.isAuth());

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="sign-in" element={authenticated ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path="dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="sign-out" element={authenticated ? <SignOut /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;