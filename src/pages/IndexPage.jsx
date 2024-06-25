import { Link } from "react-router-dom";
export default function IndexPage(){
    return(
            <div className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                <Link to={'/account/places'}>
                  <div className="bg-gray-500 mb-2 rounded-2xl flex">
                    <img src='/Radison.jpg' alt=""/>
                  </div>
                  <h2 className="font-bold">Jammu</h2>
                  <h3 className="text-sm text-gray-500">Radison</h3>
                  <div className="mt-1">
                    <span className="font-bold">Rs 5000</span> per night
                  </div>
                </Link>
            </div>
    );
}