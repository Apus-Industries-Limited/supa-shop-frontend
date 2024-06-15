import "../styles/Delivery.css"
import Image1 from "../assets/images/address.png"
import Image2 from "../assets/images/step22.jpg"
import Image3 from "../assets/images/step33.jpg"


const Delivery = () => {

  return (
    <div className="step-one-container">
      <div className="inner-container">
        <div className="shipping-info-header">
          <small className="ste">Step 3 of 3</small>
          <div className="floppy111">
            <img className="img111" src={Image1} alt="" />
          </div>
          <div className="floppy222">
            <img className="img222" src={Image2} alt="" />
          </div>
          <div className="floppy333">
            <img className="img333" src={Image3} alt="" />
          </div>
          <div className="info">Shipping Information</div>
        </div>

        <div className="form-container">
          <form action="" className="form" >
            <div className="first-input">
              <span className="input1">
                <label htmlFor="card">Express Delivery</label> <br />
                <div className="express-delivery">
                  <span className="price">NGN 0.0</span> <span className="days">Delivery within 3-5 days</span>
                </div>
              </span>{" "}
              
              <br />
              <span className="input2">
              <label htmlFor="card">Standard Delivery</label> <br />
                <div className="express-delivery">
                  <span className="price">NGN 0.0</span> <span className="days">Delivery within 5-11 days</span>
                </div>
              </span>
            </div>

            <div className="second-input">
              <span className="input1">
              <label htmlFor="card">Door Step Delivery</label> <br />
                <div className="express-delivery">
                  <span className="price">NGN 200</span> <span className="days">Delivery within 5-14 days</span>
                </div>
              </span>{" "}
              <br />
              <span className="input2">
              <label htmlFor="card">Store pick up</label> <br />
                <div className="express-delivery">
                  <span className="price">Free</span> <span className="days">Same day</span>
                </div>
              </span>
            </div>

            <div className="btn-container">
              <button className="btn">Complete Order</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Delivery;
