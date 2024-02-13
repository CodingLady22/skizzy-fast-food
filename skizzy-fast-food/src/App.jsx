import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import CartPage from './components/cart/CartPage'
import Nav from './components/home/Nav'
import { CartContextProvider } from './context/cartContextProvider'
import './App.css'
import '../src/scss/styles.scss'

function App() {

  return (
    <>
      <CartContextProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/cartPage' element={<CartPage />} />
          </Routes>
        </Router>
      </CartContextProvider>
    </>
  )
}

export default App
