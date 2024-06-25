import AccNav from "../AccNav";

export default function PlacesPage(){
    return (
        <>
        <AccNav/>
        <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
          <h1 className="text-3xl">Radisson</h1>
          <div>Jammu</div>
          <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
            <div>
              <div className="my-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                XYZ Description
              </div>
              Check-in: checkIn<br />
              Check-out: checkOut<br />
              Max number of guests: maxGuests
            </div>
          </div>
          <div className="bg-white -mx-8 px-8 py-8 border-t">
            <div>
              <h2 className="font-semibold text-2xl">Extra info</h2>
            </div>
            <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">extraInfo</div>
          </div>
        </div>
        </>
      );
}