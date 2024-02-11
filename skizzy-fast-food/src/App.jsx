import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '../src/scss/styles.scss'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import Nav from './components/home/Nav'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
