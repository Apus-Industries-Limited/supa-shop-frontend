import "../styles/Address.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Image1 from "../assets/image/step1.jpg";
import Image2 from "../assets/image/step22.jpg";
import Image3 from "../assets/image/step3.jpg";

const Address = () => {
  const navigate = useNavigate()

  interface Details {
    name: string;
    phone: string;
    address: string;
    city: string;
    country: string;
  }
  const [userDetails, setUserDetails] = useState<Details>({
    name: "",
    phone: "",
    address: "",
    city: "",
    country: "",
  });


  const InputTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetails((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userDetails);
  };

  const proceedHandler = ()=>{

    userDetails.name==="" || userDetails.phone==="" || userDetails.address==="" || userDetails.city==="" || userDetails.country==="" ? "" : navigate( "/card-details")

  }

  return (
    <div className="step-one-container">
      <div className="inner-container">
        <div className="shipping-info-header">
          <small className="ste">Step 1 of 3</small>
          <div className="floppy1">
            <img className="img1" src={Image1} alt="" />
          </div>
          <div className="floppy2">
            <img className="img2" src={Image2} alt="" />
          </div>
          <div className="floppy3">
            <img className="img3" src={Image3} alt="" />
          </div>
          <div className="info">Shipping Information</div>
        </div>

        <div className="form-container">
          <form action="" className="form" onSubmit={submitHandler}>
            <div className="first-input">
              <span className="input1">
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  id="name"
                  className="input"
                  name="name"
                  placeholder="Any Name"
                  required
                  onChange={InputTarget}
                />
              </span>{" "}
              <br />
              <span className="input2">
                <label htmlFor="phone">Phone Number</label> <br />
                <input
                  type="tel"
                  id="phone"
                  className="input"
                  name="phone"
                  placeholder="070537282882"
                
                  required
                  onChange={InputTarget}
                />
              </span>
            </div>

            <div className="second-input">
              <span className="input1">
                <label htmlFor="address">Address</label> <br />
                <input
                  type="text"
                  id="address"
                  className="input"
                  name="address"
                  placeholder="101, Mabinu str,Any City,Country"
                  required
                  onChange={InputTarget}
                />
              </span>{" "}
              <br />
              <span className="input2">
                <label htmlFor="city">City</label> <br />
                <input
                  type="text"
                  id="city"
                  className="input"
                  name="city"
                  placeholder="Any City"
                  required
                  onChange={InputTarget}
                />
              </span>
            </div>
            <div className="Third-input">
              <span className="input1">
                <label htmlFor="country">Country</label> <br />
                <input
                  type="text"
                  id="country"
                  className="input"
                  name="country"
                  placeholder="Any Country"
                  required
                  onChange={InputTarget}
                />
              </span>{" "}
              <br />
              <span className="input2">
                <label htmlFor="shipping">Shipping</label> <br />
                <input
                  className="input"
                  type="text"
                  id="shipping"
                  readOnly
                  name="shipping"
                  placeholder="Executive and Expert Shipping[1 day]"
                  required
                  onChange={InputTarget}
                
                />
              </span>
            </div>

            <div className="check">
              <input className="checkbox" type="checkbox" />
              <span>Remember my settings</span>
            </div>

            <div className="btn-container">
              <button className="btn" onClick={proceedHandler} >Proceed</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Address;
