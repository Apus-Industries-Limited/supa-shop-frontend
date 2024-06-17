import { useLocation, Navigate, Outlet } from "react-router-dom";
import useBuyerContext from "../hooks/useBuyerContext";

const RequireAuth = () => {
  const location = useLocation();
  const { user } = useBuyerContext();
  return (
    user ? <Outlet /> :
      <Navigate to="/login" state={{ from : location }} replace/>
  )
}

export default RequireAuth
