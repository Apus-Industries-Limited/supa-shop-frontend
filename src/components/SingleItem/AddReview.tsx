/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Textarea } from "@nextui-org/react"
import { useState } from "react"
import { BsStar, BsStarFill } from "react-icons/bs"
import { toastMsg } from "../../utils/toast"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import useBuyerContext from "../../hooks/useBuyerContext"

interface Props{
  productId:string
}
const AddReview = ({productId}:Props) => {
  const [rating, setRating] = useState<number>(0)
  const [review, setReview] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const {user} = useBuyerContext()

  const axiosPrivate = useAxiosPrivate()
  const addReview = async () => {
    if(!user.accessToken) return toastMsg("error","User not loged in")
    if (rating === 0 || review === "") {
      toastMsg("error","Add a review and rate number")
    }
    try {
      setLoading(true)
      const res = await axiosPrivate.post(`/review`, { review, rating, productId })
      toastMsg("success", res.data.message)
      setMessage("You're review has been added")
    } catch (e: any) {
      if (e.response.status === 409) {
        toastMsg("error", "You've added a review previously")
        setRating(0)
        setReview("")
        setMessage("You've added a review previously")
        return
      }
      toastMsg("error", e.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <div>
      <p className="text-lg capitalize font-bold">Rate this Product</p>
      {
        message === "" ?
          <>
            {rating === 0 &&
              <div className="flex space-x-3 items-center my-4 justify-center">
                <BsStar size={24} className="" onClick={() => setRating(1)} />
                <BsStar size={24} className="" onClick={() => setRating(2)} />
                <BsStar size={24} className="" onClick={() => setRating(3)} />
                <BsStar size={24} className="" onClick={() => setRating(4)} />
                <BsStar size={24} className="" onClick={() => setRating(5)} />
              </div>
            }
            {rating === 1 &&
              <div className="flex space-x-3 items-center my-4 justify-center">
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(1)} />
                <BsStar size={24} className="" onClick={() => setRating(2)} />
                <BsStar size={24} className="" onClick={() => setRating(3)} />
                <BsStar size={24} className="" onClick={() => setRating(4)} />
                <BsStar size={24} className="" onClick={() => setRating(5)} />
              </div>
            }
            {rating === 2 &&
              <div className="flex space-x-3 items-center my-4 justify-center">
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(1)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(2)} />
                <BsStar size={24} className="" onClick={() => setRating(3)} />
                <BsStar size={24} className="" onClick={() => setRating(4)} />
                <BsStar size={24} className="" onClick={() => setRating(5)} />
              </div>
            }
            {rating === 3 &&
              <div className="flex space-x-3 items-center my-4 justify-center">
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(1)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(2)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(3)} />
                <BsStar size={24} className="" onClick={() => setRating(4)} />
                <BsStar size={24} className="" onClick={() => setRating(5)} />
              </div>
            }
            {rating === 4 &&
              <div className="flex space-x-3 items-center my-4 justify-center">
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(1)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(2)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(3)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(4)} />
                <BsStar size={24} className="" onClick={() => setRating(5)} />
              </div>
            }
            {rating === 5 &&
              <div className="flex space-x-3 items-center my-4 justify-center">
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(1)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(2)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(3)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(4)} />
                <BsStarFill size={24} className="text-primary" role="button" onClick={() => setRating(5)} />
              </div>
            }
            <p className="text-center font-bold">Rating: {rating}</p>

            {rating !== 0 &&
              <div className="mt-5">
                <Textarea
                  label="Review"
                  placeholder="Write a review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="mt-5"
                />

                <div className="flex items-center justify-center mt-3">
                  <Button isLoading={loading} isDisabled={loading} color="primary" className="mx-auto" onClick={addReview}>Add Review</Button>
                </div>
              </div>
            }
          
          </>:
          <div className="h-52 flex justify-center items-center">
            <p className="text-center">{message}</p>
          </div>
          }
    </div>
  )
}

export default AddReview
