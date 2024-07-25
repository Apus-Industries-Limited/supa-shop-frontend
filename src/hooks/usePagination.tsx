import { useCallback, useEffect, useState } from "react";
import axios from "../utils/axios";
import { useInView } from "react-intersection-observer";

interface Props{
  url:string
}
const usePagination = ({url}:Props) => {
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([])
  
  const fetchData = useCallback(async(url:string) => {
    if (!hasMore) return;
      try {
        const res = await axios.get(`${url}?skip=${skip}`)
        const fetched = res.data
        setData( [...data, ...fetched]);
        setSkip(prev => prev + fetched.length)
        if (fetched.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error)
        setHasMore(false)
      } 
  }, [hasMore, data, skip])
  
  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce:false
  })
  
  useEffect(() => {
    if (url) {
      fetchData(url)
    }
  },[fetchData,url])
  useEffect(() => {
    if (inView && hasMore) {
      fetchData(url);
    }
  }, [fetchData, inView, hasMore, url])
  
  return {ref,data,skip,hasMore,inView}
}

export default usePagination
