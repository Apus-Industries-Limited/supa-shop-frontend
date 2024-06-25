import { BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="flex max-w-max items-center md:hidden" role="button" onClick={() => navigate(-1)}>
      <BsChevronLeft className="text-xl font-bold"/>
      <span className="font-bold text-xl">Back</span>
    </div>
  )
}

export default BackButton
