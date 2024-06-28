import SwitchDarkMode from './SwitchDarkMode'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu } from "@nextui-org/react";
import { useUserContext } from '../Context/UserProviders'
import textoLogo from '../assets/texto-logo.svg'
import aboutIcon from '../assets/about.svg'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';

const Header = () => {

  const { clearMessages } = useUserContext()


  const consultingClearMessages = () => {
    Swal.fire({
      title: '¿Deseas borrar tu chat?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#6844A2',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, borrar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearMessages()
        Swal.fire(
          '¡Borrado!',
          'Tus mensajes han sido borrados.',
          'success'
        )
      }
    })
  }

  return (
    <Navbar isBordered isBlurred={false} className='dark:bg-laguna-700 bg-laguna p-2 text-laguna-50 dark:text-laguna-100'>

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
        <Link to="/">
          <img src={textoLogo} alt="logo" className="w-14" />
        </Link>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 text-laguna-50" justify="center">
        <NavbarBrand>
          <Link to="/">
            <img src={textoLogo} alt="logo" className="w-14" />
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link to="/">Chat</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/about">Nosotros</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            className='bg-laguna-50 text-laguna-950  dark:bg-laguna dark:text-laguna-50 '
            radius="full"
            size="sm"
            onClick={consultingClearMessages}
          >
            Borrar
          </Button>
        </NavbarItem>
        <NavbarItem>
          <SwitchDarkMode />
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu
        className='text-laguna-100 dark:text-laguna-50 bg-laguna flex justify-center items-center h-screen'
      >
        <div className="flex flex-col items-center space-y-4">
          <Link to="/">Chat</Link>
          <Link to="/about">Nosotros</Link>
        </div>
      </NavbarMenu>

    </Navbar>
  )
}

export default Header