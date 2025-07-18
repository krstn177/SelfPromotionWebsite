import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import { Home } from './components/Home/Home'
import { SharedFooter } from "./components/Shared/SharedFooter/SharedFooter";
import { CookieRules } from "./components/Legal/CookieRules/CookieRules";
import { Terms } from "./components/Legal/Terms/Terms";
import { PersonalInformation } from "./components/Legal/PersonalInformation/PersonalInformation";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cookies-policy" element={<CookieRules/>}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/personal-info-rules" element={<PersonalInformation/>}/>
      </Routes>
      <SharedFooter />
    </BrowserRouter>
  )
}

export default App
