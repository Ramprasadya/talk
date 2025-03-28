import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'rsuite/dist/rsuite.min.css';  // or 'rsuite/styles/index.less';
import { Routes,Route } from 'react-router-dom';
import PrivateRoute from "./components/PrivateRoute"
import PublicRoute from "./components/PublicRoute"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Hello
     {/* <Navbar /> */}
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route element={<PrivateRoute/>} >
            <Route path="/" element={<Home/>} />
        </Route>
        <Route element={<PublicRoute/>} >
            <Route path="/" element={<Home/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App 
