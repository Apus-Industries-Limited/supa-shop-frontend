import "../styles/OrderCompleted.css"
import { CiCircleInfo } from "react-icons/ci"
import { FaAngleLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

const OrderCompleted = () => {
    return (
        <div className="step-one-container">

            <div className="all-content">

                <div className="successful">
                    <CiCircleInfo size={30} className="circle-icon" />
                    <div className="text">Order placed successfully</div>
                </div>

                <div className="btn-cont">
                    <Link to={"/shop"}>
                        <button className="btn-success1" >
                            <FaAngleLeft />
                            <div className="btn-text">Return to shop</div>
                        </button>
                    </Link>

                    <Link to={"/"}>
                        <button className="btn-success2">
                            <FaAngleLeft />
                            <div className="btn-text">Return to home</div>
                        </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default OrderCompleted