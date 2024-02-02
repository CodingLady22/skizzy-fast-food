import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../src/scss/styles.scss'
import Nav from './components/Nav'
import Header from './components/Header'
import Menu from './components/menu/Menu'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Nav />
        <Header />
        <Menu />
      </Router>
    </>
  )
}

export default App
