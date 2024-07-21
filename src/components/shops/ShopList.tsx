/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect,useState } from 'react';
import ShopMenu from "./ShopMenu"
import SingleShop from "./SingleShop"
import axios from '../../utils/axios';
import { ShopProps } from '../../types/Types';
import SkeletonLoad from '../animation/SkeletonLoad';


const ShopList = () => {
  const [shops, setShops] = useState<ShopProps[]>([])
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true)
  const [url,setUrl] = useState<string>("/store?category=")
  
  const loadShops = useCallback(async (url:string) => {
    if (!hasMore) return;
      try {
        const res = await axios.get(`${url}&skip=${skip}`)
        const fetched = res.data
        console.log(fetched)
        setShops([...shops, ...fetched]);
        setSkip(prev => prev + fetched.length)
        if (fetched.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error)
        setHasMore(false)
      } 
  }, [skip,shops, hasMore])

  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce:false
  })

  useEffect(() => {
    setShops([])
    setSkip(0)
    setHasMore(true);
  },[url])
  

  useEffect(() => {
    if (url) {
      loadShops(url)
    }
  }, [loadShops, url]);


  useEffect(() => {
    if (inView && hasMore) {
      loadShops(url);
    }
  },[loadShops,inView,hasMore,url])
  
  return (
    <div className="w-full mx-auto h-full py-5 overflow-y-auto px-8">
      <ShopMenu setUrl={setUrl} url={url} />
      {!shops && hasMore && <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 py-10'>
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
        <SkeletonLoad />
      </div>}
      {shops && !hasMore && <>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 py-10">
          {shops.map(shop => (
            <SingleShop key={shop.id} shop={shop}/>
          ))}
        </div>
      </>}
      {shops && hasMore && <>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 py-10">
          {shops.map(shop => (
            <SingleShop key={shop.id} shop={shop}/>
          ))}
        </div>
        {hasMore ? <div ref={ref} className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 py-10'>
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
          <SkeletonLoad />
        </div> : null}
      </>}
    </div>
  )
}

export default ShopList
