import SwitchDarkMode from './SwitchDarkMode'

const Header = () => {


  return (
    <div className='dark:bg-pistachio-950 flex justify-between h-30 bg-pistachio p-4 text-pistachio-700 dark:text-pistachio'>
      <h1>Header</h1>
      <SwitchDarkMode />
    </div>
  )
}

export default Header