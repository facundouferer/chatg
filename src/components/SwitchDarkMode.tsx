import { useEffect, useState } from 'react'
import { useUserContext } from '../Context/UserProviders'
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

const SwitchDarkMode = () => {

  const { changeDarkMode, loadDarkMode, darkMode } = useUserContext()
  const [value, setValue] = useState<boolean>(false)

  useEffect(() => {
    loadDarkMode()
  }, [])

  useEffect(() => {
    setValue(darkMode)
  }, [darkMode])

  return (
    <>
      <Switch
        size="lg"
        color="secondary"
        isSelected={value}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
        onValueChange={changeDarkMode}>
      </Switch>
    </>
  )
}

export default SwitchDarkMode