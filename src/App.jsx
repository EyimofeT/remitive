import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import EmailVerification from './pages/auth/EmailVerification'
import Home from './pages/dashboard/Home/Home'
import Wallet from './pages/dashboard/Wallet/Wallet'


function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
     <Routes>
      <Route path='/auth'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='email-verification' element={<EmailVerification />} />
      </Route>
      <Route path="/">
        <Route path="" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
      </Route>
     </Routes>
    </MantineProvider>
  )
}

export default App
