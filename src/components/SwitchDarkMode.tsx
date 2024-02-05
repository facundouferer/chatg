import React from 'react'
import { useUserContext } from '../Context/UserProviders'

const SwitchDarkMode = () => {

  const { setDarkMode } = useUserContext()

  const handleChangeDarkMode = (e: any) => {
    setDarkMode(e)
  }

  return (
    <div>
      <input type="checkbox" id="switch" onChange={(e) => handleChangeDarkMode(e.target.checked)} />
      <label htmlFor="switch" className='ml-3'>DarkMode</label>
    </div>
  )
}

export default SwitchDarkMode