import { useState } from 'react'
import { auth } from './utils';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { SignIn, SignOut, LandingPage, Dashboard, Trades, SignUp, Accounts} from './pages';
import { MessageProvider } from './context/MessageContext'
import { SummaryProvider } from './context/SummaryContext';



function App() {

  const [authenticated] = useState<boolean>(auth.isAuth());

  return (
    <MessageProvider>
        <SummaryProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="sign-in" element={authenticated ? <Navigate to="/accounts" /> : <SignIn />} />
              <Route path="accounts" element={authenticated ? <Accounts /> : <Navigate to="/" />} />
              <Route path="/accounts/:id/dashboard" element={authenticated ? <Dashboard /> : <Navigate to="/" />} />
              <Route path="/accounts/:id/dashboard/sign-out" element={authenticated ? <SignOut /> : <Navigate to="/" />} />
              <Route path="/accounts/:id/trades" element={authenticated ? <Trades /> : <Navigate to ="/" />} />
              <Route path="*" element={<SignIn />} />
            </Routes>
          </BrowserRouter>
        </SummaryProvider>
    </MessageProvider>
  );
}

export default App;