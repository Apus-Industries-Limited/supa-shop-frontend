import { useContext } from 'react'
import BuyerContext from '../context/BuyerContext'

const useBuyerContext = () => {
  return useContext(BuyerContext)
}

export default useBuyerContext
