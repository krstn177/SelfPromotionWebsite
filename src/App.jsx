import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import ScrollToTop from './utils/ScrollToTop'
import { Home } from './components/Home/Home'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
