import { useCallback, useEffect, useState } from "react"
import { Product } from "../../types/Types"
import axios from "../../utils/axios"
import { useInView } from "react-intersection-observer"
import SkeletonLoad from "../animation/SkeletonLoad"
import StoreProduct from "./StoreProduct"

interface Props{
  id: string | undefined
}
const ShopProduct = ({ id }: Props) => {
  const [products, setProducts] = useState<Product[]>([])
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true)

  const fetchedProduct = useCallback(async (url:string) => {
    if (!hasMore) return;
      try {
        const res = await axios.get(`${url}&skip=${skip}`)
        const fetched = res.data
        console.log(fetched)
        setProducts([...products, ...fetched]);
        setSkip(prev => prev + fetched.length)
        if (fetched.length < 10) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error)
        setHasMore(false)
      } 
  }, [skip, hasMore,products])

  const { ref, inView } = useInView({
    threshold: 1.0,
    triggerOnce:false
  })

  useEffect(() => {
    if (inView && hasMore) {
      fetchedProduct(`/store/product?storeId=${id}`);
    }
  },[fetchedProduct,inView,hasMore,id])
  
  useEffect(() => {
    fetchedProduct(`/store/product?storeId=${id}`)
  }, [fetchedProduct,id])
  
  return (
    <div className="w-full mx-auto h-full py-5 overflow-y-auto md:px-8">
      {!products.length && hasMore && <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:py-10'>
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
      {products && !hasMore && <>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:py-10">
          {products.map(product => (
            <StoreProduct key={product.id} product={product}/>
          ))}
        </div>
      </>}
      {products && hasMore && <>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:py-10">
          {products.map(product => (
            <StoreProduct key={product.id} product={product}/>
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
      {!hasMore && !products.length && <div className="h-full flex justify-center items-center">
        <p className="text-2xl">Store has no product</p>
      </div>}
    </div>
  )
}

export default ShopProduct
