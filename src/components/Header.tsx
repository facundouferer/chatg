import SwitchDarkMode from './SwitchDarkMode'

const Header = () => {


  return (
    <div className='dark:bg-laguna-950 flex justify-between bg-laguna-700 p-2 text-laguna-50 dark:text-laguna'>
      <h1>'ELE' bot</h1>
      <SwitchDarkMode />
    </div>
  )
}

export default Header