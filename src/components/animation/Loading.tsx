import "../../styles/Loader.css"
import icon from "../../assets/image/6.png"

interface Props{
  loading : boolean
}

const Loading = ({loading}:Props) => {
  return (
    <div className={loading ? 'max-h-screen bg-gray-300 flex justify-center items-center' : "hidden"}>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center max-h-screen max-w-full">
        <div className=" bg-opacity-50 p-8 rounded-lg shadow-lg relative">
          <div className="relative">
            <img src={icon} alt="icon loader" className=" h-[10rem] w-[10rem] animate-pulse mx-auto"/>
          </div>
          <div className="spinner absolute inset-0 m-auto"/>
        </div>
      </div>
    </div>
  )
}

export default Loading
