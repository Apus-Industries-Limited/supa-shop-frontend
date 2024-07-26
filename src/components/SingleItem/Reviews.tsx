import { useEffect, useState } from "react";
import { Ratings, Review, UserSafe } from "../../types/Types";
import axios from "../../utils/axios";
import { Card, CardBody, User } from "@nextui-org/react";
import { DEV_URL as url } from "../../utils/axios";
import { BsStar, BsStarFill } from "react-icons/bs";


interface Props{
  review: Review
  rating: Ratings | undefined
}
const Reviews = ({ review,rating }: Props) => {

  const [user, setUser] = useState<UserSafe | null>(null)
  

  useEffect(() => {
    (async() => {
      try {
        const res = await axios.get(`/user/${review.userId}`)
        const result = await res.data
        console.log(res.data)
        setUser(result)
      } catch (e) {
        console.error(e)
      }
    })()
  },[review])

  return (
    <Card className="my-2">
      <CardBody>
        <User
          name={user?.name}
          description={user?.username}
          avatarProps={{ 
            src: `${url}/images/user/${user?.dp}`,
            size:"sm"
          }}
          className="justify-start"
        />
        <div className="flex space-x-2 text-primary items-center my-3">
          {rating?.rating === 1 ? <div className="flex space-x-3 items-center">
              <BsStarFill />
              <BsStar />
              <BsStar />
              <BsStar />
              <BsStar />
            </div> :
            rating?.rating === 2 ? <div className="flex space-x-3 items-center">
              <BsStarFill />
              <BsStarFill />
              <BsStar />
              <BsStar />
              <BsStar />
            </div> :
            rating?.rating === 3 ? <div className="flex space-x-3 items-center">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStar />
                <BsStar/>
              </div>
                :
            rating?.rating === 4 ? <div className="flex space-x-3 items-center">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStar />
                </div>
                  :
            rating?.rating === 5 ? <div className="flex space-x-3 items-center">
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
            </div> : <div className="flex space-x-3 items-center">
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                      <BsStar />
                  </div>
          }
        </div>
        <hr />
        <p className="mt-3">{review.review}</p>
      </CardBody>
    </Card>
  )
}

export default Reviews
