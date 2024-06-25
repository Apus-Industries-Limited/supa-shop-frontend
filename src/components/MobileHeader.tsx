import { BsBell } from "react-icons/bs"
import BackButton from "./BackButton";


interface prop {
  title: string | null
}

const MobileHeader = ({ title }: prop) => {
  return (
    <div className="md:hidden flex justify-between items-center py-8 px-6 border-b rounded-sm mx-2">
        <BackButton/>
        <p className="text-xl font-bold capitalize">{title}</p>
        <BsBell role="button"/>
      </div>
  )
}

export default MobileHeader
