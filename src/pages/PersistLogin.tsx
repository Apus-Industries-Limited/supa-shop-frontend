import { useEffect, useState } from "react"
import useBuyerContext from "../hooks/useBuyerContext"
import useRefreshToken from "../hooks/useRefreshToken"
import { Outlet } from "react-router-dom"
import { Spinner } from "@nextui-org/react"


const PersistLogin = () => {
  const { persist, user } = useBuyerContext()
  const refresh = useRefreshToken()
  const [loading, setLoading] = useState<boolean>(true)
  
  useEffect(() => {
    
    const verifyRefreshToken = async () => { 
      try {
        await refresh()
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    !user?.accessToken && persist ? verifyRefreshToken() : setLoading(false)

  }, [persist])
  return (
    <>
      {!persist ?
        <Outlet /> :
        loading ? 
          <div className="flex justify-center items-center h-screen w-full">
            <Spinner size="lg" color="primary"/>
          </div>
          :
          <Outlet/>
    }
    </>
  )
}

export default PersistLogin
