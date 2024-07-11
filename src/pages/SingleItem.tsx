import img from "../assets/image/beans.jpg";
import "../styles/SingleItem.css";
import star from "../assets/star.svg";
const SingleItem = () => {
  return (
    <div className="min-h-screen w-full ">
      <div className="w-full h-1/2  bg-neutral-100 flex items-center justify-center">
        <img src={img} alt="" className=" relative reduce" />
      </div>
      <div className="w-full h-1/2 bg-neutral-200 px-6 py-10 flex">
        <div className=" w-1/3">
          <div className="flex items-center gap-4">
            <h3 className=" text-xl text-neutral-700 font-extrabold ">
              Straw Hat
            </h3>
            <span className=" text-lg text-neutral-500"> By store name </span>
            <div className="flex h-[10px]">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
          </div>
          <hr className=" bg-neutral-700 w-full flex " />
          <h3 className=" text-lg text-neutral-600 font-extrabold">
            Description
          </h3>
          <article className="text-neutral-400 text-small ">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
            aliquam! Soluta aspernatur possimus culpa nam impedit eos voluptate
            esse porro.
          </article>
        </div>
        <div className="w-1/3">
          <button className="bg-[#FF7900] text-white text-lg font-extrabold px-5 py-2 rounded-[20px] w-[200px]">
            Add to cart
          </button>
        </div>
        <div className="w-1/3">
          <div className="flex justify-start items-center gap-9">
            <div>
              <div>
                {" "}
                <h3 className="mb-2">Available Colours</h3>
                <div className="flex gap-1 mb-8 ">
                  <div className="bg-[#49290e] w-[20px] h-[20px] rounded-[20px] block "></div>
                  <div className="bg-[#646464] w-[20px] h-[20px] rounded-[20px] block "></div>
                  <div className="bg-[#FF7900] w-[20px] h-[20px] rounded-[20px] block "></div>
                </div>
              </div>
              <div>
                <h3 className="mb-2">Available Size</h3>
                <div className="flex gap-2">
                  <button className="bg-[#361e0a] text-white p-2 w-[100px] rounded-[200px] ">
                    Small
                  </button>
                  <button className="bg-white text-[#361e0a] p-2 w-[100px] rounded-[200px] ">
                    Small
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3>Quantity</h3>
              <button className="bg-[#FF7900] text-white text-lg font-extrabold px-5 py-2 rounded-[30px] w-[80px]">
                +
              </button>
              <button className="bg-[#424242] text-white text-lg font-extrabold px-5 py-2 rounded-[30px] w-[80px]">
                1
              </button>
              <button className="bg-[#242424] text-white text-lg font-extrabold px-5 py-2 rounded-[30px] w-[80px]">
                -
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
