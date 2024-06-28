import './styles/App.css'
import { UserProvider } from './Context/UserProviders'
import { HashRouter, Route, Routes } from "react-router-dom";
import Index from './pages/Index'
import About from './pages/About'
import Error404 from './pages/Error404'

function App() {

  return (
    <>
      <UserProvider>
        <HashRouter basename="/">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            {/*error 404*/}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </HashRouter>
      </UserProvider>
    </>
  )
}

export default App
