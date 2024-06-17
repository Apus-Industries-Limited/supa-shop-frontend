import { useEffect, useState } from "react"
import useBuyerContext from "../hooks/useBuyerContext"
import useRefreshToken from "../hooks/useRefreshToken"
import { Outlet } from "react-router-dom"


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
          <p>Loading</p>
          :
          <Outlet/>
    }
    </>
  )
}

export default PersistLogin
