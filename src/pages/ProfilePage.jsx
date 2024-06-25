import AccNav from '../AccNav';
export default function ProfilePage(){
    
    return(
        <>
        <AccNav/>
        <div>
        <div className="text-center max-w-lg mx-auto p-8">
          Logged in as Shivansh (shivanshgupta290804@gmail.com)<br />
          <button  className="primary max-w-sm mt-2">Logout</button>
        </div>
    </div>
    </>
    )
}