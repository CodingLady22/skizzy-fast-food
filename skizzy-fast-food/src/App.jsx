import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../src/scss/styles.scss'
import Nav from './components/home/Nav'
import Header from './components/home/Header'
import Menu from './components/home/Menu'
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
