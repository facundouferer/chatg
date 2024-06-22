import { useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserProviders'

const SwitchDarkMode = () => {

  const { changeDarkMode, loadDarkMode, darkMode } = useUserContext()
  const [value, setValue] = useState<boolean>(false)

  useEffect(() => {
    loadDarkMode()
  }, [])

  useEffect(() => {
    setValue(darkMode)
  }, [darkMode])

  const handleChangeDarkMode = (e: boolean) => {
    changeDarkMode(e)
  }

  return (
    <>
      <input
        type="checkbox"
        id="switchDarckMode"
        onChange={(e) => handleChangeDarkMode(e.target.checked)}
        checked={value}
      />
    </>
  )
}

export default SwitchDarkMode