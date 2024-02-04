import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../src/scss/styles.scss'
import Home from './components/home/Home'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Home />
      </Router>
    </>
  )
}

export default App
