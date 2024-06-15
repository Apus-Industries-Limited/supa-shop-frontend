import "./SecondComponent.css"
import { useState } from "react";
import Image1 from "../images/step221.jpg";
import Image2 from "../images/address.png";
import Image3 from "../images/step3.jpg";

import { useNavigate } from "react-router-dom";


const SecondComponent = () => {
  const navigate = useNavigate()

    interface Details {
        card: string;
        card_name: string;
        exp_date: string;
        cvv: string;

      }
      const [userDetails, setUserDetails] = useState<Details>({
        card: "",
        card_name: "",
        exp_date: "",
        cvv: "",
       
      });

      
    
      let InputTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name;
        let value = e.target.value;
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
  
        userDetails.card==="" || userDetails.card_name==="" || userDetails.exp_date==="" || userDetails.cvv==="" ? "" : navigate( "/delivery-method")
        
      }


  return (
    <div className="step-one-container">
      <div className="inner-container">
        <div className="shipping-info-header">
          <small className="ste">Step 2 of 3</small>
          <div className="floppy11">
            <img className="img11" src={Image2} alt="" />
          </div>
          <div className="floppy22">
            <img className="img22" src={Image1} alt="" />
          </div>
          <div className="floppy33">
            <img className="img33" src={Image3} alt="" />
          </div>
          <div className="info">Shipping Information</div>
        </div>

        <div className="form-container">
          <form action="" className="form" onSubmit={submitHandler}>
            <div className="first-input">
              <span className="input1">
                <label htmlFor="card">Card Number</label> <br />
                <input
                  type="tel"
                  id="card"
                  className="input"
                  name="card"
                  placeholder="1234567890"
                  maxLength={10}
                  required
                  onChange={InputTarget}
                />
              </span>{" "}
              <br />
              <span className="input2">
                <label htmlFor="card-name">Card Name</label> <br />
                <input
                  type="text"
                  id="card-name"
                  className="input"
                  name="card_name"
                  placeholder="John Doe"
                  required
                  onChange={InputTarget}
                />
              </span>
            </div>

            <div className="second-input">
              <span className="input1">
                <label htmlFor="exp-date">Ex. Date</label> <br />
                <input
                  type="text"
                  id="exp-date"
                  className="input"
                  name="exp_date"
                  placeholder="10/28"
                  required
                  onChange={InputTarget}
                />
              </span>{" "}
              <br />
              <span className="input2">
                <label htmlFor="cvv">CVV</label> <br />
                <input
                  type="text"
                  id="cvv"
                  className="input"
                  name="cvv"
                  placeholder="123"
                  required
                  onChange={InputTarget}
                />
              </span>
            </div>
            

            <div className="check">
              <input className="checkbox" type="checkbox" />
              <span>Save this card</span>
            </div>

            <div className="btn-container">
              <button className="btn" onClick={proceedHandler} >Proceed</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default SecondComponent
