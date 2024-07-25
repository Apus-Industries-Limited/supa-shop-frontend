/* eslint-disable @typescript-eslint/no-explicit-any */
import { useInView } from 'react-intersection-observer';
import { useCallback, useEffect,useState } from 'react';
import axios from '../../../utils/axios';
import { ShopProps } from '../../../types/Types';
import SkeletonLoad from '../../animation/SkeletonLoad';
import MobileSingleShop from './MobileSingleShop';

interface Props{
  url: string;
}
const MobileShopList = ({url}:Props) => {
  const [shops, setShops] = useState<ShopProps[]>([])
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true)
  
  
  const loadShops = useCallback(async (url:string) => {
    if (!hasMore) return;
      try {
        const res = await axios.get(`${url}&skip=${skip}`)
        const fetched = res.data
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
    <div className='py-4'>
      {!shops && hasMore && <div className='grid grid-cols-2 gap-4 py-0'>
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
      {shops && !hasMore &&
        <div className="grid grid-cols-2 gap-4">
          {shops.map(shop => (
            <MobileSingleShop key={shop.id} shop={shop}/>
          ))}
        </div>}
      {shops && hasMore && <>
        <div className="grid grid-cols-2 gap-4">
          {shops.map(shop => (
            <MobileSingleShop key={shop.id} shop={shop}/>
          ))}
        </div>
        {hasMore ? <div ref={ref} className='grid grid-cols-2 gap-4'>
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
      {!shops.length && !hasMore && <div className='h-52 flex flex-col justify-center items-center'>
        <p className="text-lg capitalize">No Shop at the moment</p>
        <p>Check again later</p>
      </div>}
    </div>
  )
}

export default MobileShopList
