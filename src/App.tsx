import './styles/App.css'
import Index from './pages/index'
import { UserProvider } from './Context/UserProviders'

function App() {

  return (
    <>
      <UserProvider>
        <Index />
      </UserProvider>
    </>
  )
}

export default App
