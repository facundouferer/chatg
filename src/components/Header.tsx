import SwitchDarkMode from './SwitchDarkMode'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { useUserContext } from '../Context/UserProviders'
import textoLogo from '../assets/texto-logo.svg'
import Swal from 'sweetalert2'

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
      <NavbarBrand>
        <img src={textoLogo} alt="logo" className="w-20" />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="https://ele.chaco.gob.ar/"
            target='_new'>
            <span className='text-laguna-50'>'ELE'</span>
          </Link>
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
    </Navbar>
  )
}

export default Header