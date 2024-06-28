import './styles/App.css'
import { UserProvider } from './Context/UserProviders'
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from './pages/Index'
import About from './pages/About'

function App() {

  return (
    <>
      <UserProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </HashRouter>
      </UserProvider>
    </>
  )
}

export default App
