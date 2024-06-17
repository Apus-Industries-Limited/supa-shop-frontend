import { useEffect } from "react";
import useBuyerContext from "./useBuyerContext"
import useRefreshToken from "./useRefreshToken"
import { axiosPrivate } from "../utils/axios";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { user } = useBuyerContext();

  useEffect(() => {
    const requestIntercept = axiosPrivate.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) { 
          config.headers['Authorization'] = `Bearer ${user?.accessToken}`;
        }
        return config;
      }, (e) => Promise.reject(e)
    )

    const responseIntercept = axiosPrivate.interceptors.response.use(
      response => response,
      async (error) => {
        const prevRequest = error?.config; 
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh()
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
        }
        return Promise.reject(error);
      }
    )

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user])
}

export default useAxiosPrivate
