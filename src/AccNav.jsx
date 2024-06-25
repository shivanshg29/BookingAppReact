import {Link, useLocation} from "react-router-dom";

export default function AccNav() {
    const {pathname} = useLocation();
    let subpage = pathname.split('/')?.[2];
    if (subpage === undefined) {
        subpage = 'profile';
    }
    function linkClasses (type=null) {
        let classes = 'inline-flex gap-1 py-2 px-6 rounded-full';
        if (type === subpage) {
        classes += ' bg-primary text-white';
        } else {
        classes += ' bg-gray-200';
        }
        return classes;
    }
    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className={linkClasses('profile')} to={'/account'}>My Profile</Link>
                <Link className={linkClasses('bookings')} to={'/account/bookings'}>My Bookings</Link>
                <Link className={linkClasses('places')} to={'/account/places'}>Places</Link>
            </nav>
        </div>
    )
}