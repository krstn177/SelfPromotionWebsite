import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import { Home } from './components/Home/Home'
import { SharedFooter } from "./components/Shared/SharedFooter/SharedFooter";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <SharedFooter />
    </BrowserRouter>
  )
}

export default App
