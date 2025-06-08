import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/auth'>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
      </Route>
     </Routes>
    </>
  )
}

export default App
