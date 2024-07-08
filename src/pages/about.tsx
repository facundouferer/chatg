import Header from '../components/Header'
import { useUserContext } from '../Context/UserProviders'
import robot from '../assets/robot-completo.svg'

const About = () => {

  const { darkMode } = useUserContext()

  return (
    <>
      <div className={`h-screen bg-gray-200 flex flex-col ${darkMode ? 'dark' : 'light'}`}>
        <div className="fixed top-0 left-0 right-0 w-full z-10">
          <Header />
        </div>
        <div className="flex-1 overflow-y-auto p-4 pt-[4.5rem] pb-[4.5rem] dark:bg-gray-800 bg-gray-100 dark:text-gray-300">
          <div className="max-w-screen-lg mx-auto">
            <h1 className="text-3xl font-bold  mt-5">Acerca de Nosotros</h1>
            <div className="container mx-auto px-4 py-8 text-justify">
              <p className="mb-4">
                ¡Hola y bienvenidos a la app donde puedes chatear con una inteligencia artificial que te ayudará a responder tus inquietudes académicas!
                <br />
                Esta app ha sido creada especialmente para estudiantes, por personal del Ministerio de Educación, Cultura, Ciencia y Tecnología de la
                Provincia del Chaco, para que puedan aprender de una manera divertida y fácil.
              </p>

              <section id="about">
                <h2 className="text-xl font-bold mb-2">El Proyecto</h2>
                <p className="mb-4">
                  Es un proyecto de software libre y abierto a la colaboración de desarrolladores
                  de todo el mundo. Puedes descargar el código fuente, probar la aplicación y contribuir con tus propias mejoras.
                  Toda la documentación y los detalles del proyecto están disponibles en un repositorio de GitHub.
                  <br />
                  Si deseas explorar el código fuente, aportar al desarrollo, o simplemente descargar y usar la aplicación,
                  puedes encontrar el repositorio completo en
                  <a href="https://github.com/facundouferer/chatg" target="_blank"><strong> github.com</strong></a>
                  <br />
                  ¡Esperamos tus contribuciones y sugerencias para hacer de este proyecto algo aún más increíble!
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <section>
                  <h2 className="text-xl font-bold mb-2">Tecnología y Aprendizaje</h2>
                  <p className="mb-4">
                    Para que aprender sea más divertido y fácil, usamos una inteligencia artificial. Esta inteligencia artificial está
                    hecha para ayudarles a aprender y responder sus preguntas de una manera que puedan entender. <br />
                    Utilizamos algo llamado API, que es desarrollada por Google y nos ayuda a consultar su inteligencia artificial llamada Gemini.
                    Es como un asistente que nos ayuda a traer información de manera rápida y precisa.
                    Cuando haces una pregunta, la API busca la respuesta y te la muestra en la pantalla para que puedas aprender más y resolver tus dudas fácilmente.
                  </p>
                  <h2 className="text-xl font-bold mb-2">Equipo Técnico</h2>
                  <ul>
                    <li>
                      <strong>Despliegue</strong>: <a href="https://www.linkedin.com/in/guillermo-rohde-b240b416/" target='_blank'>Guillermo Rohde</a>
                    </li>
                    <li>
                      <strong>Desarrollo</strong>: <a href="https://www.linkedin.com/in/facundouferer/" target='_blank'>Facundo Uferer</a>
                    </li>
                    <li>
                      <strong>Diseño</strong>:
                      <a href="https://www.linkedin.com/in/jackiegerber/" target='_blank'>Jacqueline Gerber </a>
                      y Marcelo Gómez
                    </li>
                  </ul>
                </section>
                <section className='items-center justify-center text-center'>
                  <div className="p-5 flex flex-col items-center bg-laguna-50 dark:bg-laguna rounded-lg">
                    <h1 className="text-2xl font-bold mb-5">Autoridades</h1>
                    <h2 className='text-lg'><strong>Arq. Leandro Cesar Zdero</strong></h2>
                    <h3>Gobernador</h3>
                    <br />
                    <h2><strong>Ministra de Educación, Cultura, Ciencia y Tecnología</strong></h2>
                    <h3>Prof. Sofía Elizabeth Petcoff Naidenoff</h3>
                    <br />
                    <h2><strong>Subsecretaria de Ciencia y Tecnología</strong></h2>
                    <h3>Arq. Claudia Alejandra Pilar</h3>
                    <br />
                  </div>
                  <div className="flex justify-center w-full">
                    <img src={robot} alt="robotito" className='w-1/3 mt-5' />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default About