import React, { useEffect, useState } from "react"
import Screen from "./splash/Screen"
import Screen2 from "./splash/Screen2"
import Screen3 from "./splash/Screen3"
import { useNavigate } from "react-router-dom"

interface Props{
  setIsFirstTime: React.Dispatch<React.SetStateAction<boolean>>
}
const SplashContainer = ({setIsFirstTime}:Props) => {
  const [currentScreen, setCurrentScreen] = useState<number>(0)
 const navigate = useNavigate()
  
  useEffect(() => {
  
      const timer = setInterval(() => {
        setCurrentScreen(prev => prev + 1);
      }, 3000)

    return () => clearInterval(timer);
  }, [currentScreen])

  const skip = (url:string) => {
    localStorage.setItem("isFirstTimeUser", "false");
      setIsFirstTime(false)
      navigate(url)
  }
  
  useEffect(() => {
    if (currentScreen > 2) {
      localStorage.setItem("isFirstTimeUser", "false");
      setIsFirstTime(false)
      navigate('/')
    }
  }, [currentScreen,navigate,setIsFirstTime])


  return (
    <div>
      {currentScreen === 0 && <Screen skip={skip} />}
      {currentScreen === 1 && <Screen2 currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} skip={skip} />}
      {currentScreen === 2 && <Screen3 currentScreen={currentScreen} skip={skip} />}
    </div>
  )
}

export default SplashContainer
