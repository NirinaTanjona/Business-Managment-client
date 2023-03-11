import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SignIn, SignOut, LandingPage, Dashboard, Trades, SignUp } from './pages';
import { MessageProvider } from './context/MessageContext'
import { auth } from './utils';



function App() {

  const [authenticated] = useState<boolean>(auth.isAuth());

  return (
    <MessageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={authenticated ? <Navigate to="/dashboard" /> : <SignIn />} />
          <Route path="dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="sign-out" element={authenticated ? <SignOut /> : <Navigate to="/" />} />
          <Route path="trades" element={authenticated ? <Trades /> : <Navigate to ="/" />} />
          <Route path="*" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </MessageProvider>
  );
}

export default App;