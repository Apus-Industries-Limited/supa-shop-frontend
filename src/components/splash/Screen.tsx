import splash from "../../assets/image/splash.png"


const Screen = () => {
  return (
    <div className="h-screen grid place-content-center">
        <img src={splash} width={300} className="mx-auto"/>
      <p className="text-3xl font-bold text-center font-mont">SupaShop</p>
      <p className="font-semibold text-center">Streaming Your shopping, Simplifying Your Life</p>
    </div>
  )
}

export default Screen
