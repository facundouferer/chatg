import Header from '../components/Header'
import { useUserContext } from '../Context/UserProviders'
import robot from '../assets/robot-completo.svg'

const Error404 = () => {

  const { darkMode } = useUserContext()

  return (
    <>
      <div className={`h-screen bg-gray-200 flex flex-col ${darkMode ? 'dark' : 'light'}`}>
        <div className="fixed top-0 left-0 right-0 w-full z-10">
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center min-h-screen dark:bg-gray-800 bg-gray-100 dark:text-gray-300">
          <div className="max-w-screen-lg text-center">
            <img src={robot} alt="robotito" />
            <h1 className="text-3xl font-bold mt-5">¡No hay nada aquí!</h1>
            <div className="px-4 py-8">
              <p className="mb-4">
                Excepto este simpático robotito que no sabe qué hacer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404