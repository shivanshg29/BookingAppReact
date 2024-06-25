import AccNav from "../AccNav";
export default function BookingPage(){
return (
    <>
    <AccNav/>
    <div className="my-8">
      <h1 className="text-3xl">Radison</h1>
      <div className="my-2 block">Jammu</div>
      <div className="bg-gray-200 p-6 my-6 rounded-2xl flex items-center justify-between">
        <div>
          <h2 className="text-2xl mb-4">Your booking information:</h2>
        </div>
        <div className="bg-primary p-6 text-white rounded-2xl">
          <div>Total price</div>
          <div className="text-3xl">Rs 5000</div>
        </div>
      </div>
    </div>
    </>
  );
}