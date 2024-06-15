import { BsBell, BsChevronLeft } from "react-icons/bs"
import { useNavigate } from "react-router-dom"


interface prop {
  title: string | null
}

const MobileHeader = ({ title }: prop) => {
  const navigate = useNavigate();
  return (
    <div className="md:hidden flex justify-between items-center py-8 px-6 border-b rounded-sm mx-2">
        <BsChevronLeft role="button" onClick={()=> navigate(-1)}/>
        <p className="text-xl font-bold capitalize">{title}</p>
        <BsBell role="button"/>
      </div>
  )
}

export default MobileHeader
