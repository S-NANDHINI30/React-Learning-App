import { Link } from "react-router-dom"; //used to link the route without refreshing the page bcoz anchor tag refreshes the page
import useNetworkStatus from "../utils/useNetworkStatus";
const Header=()=> //javascript function
{
    const onlineStatus = useNetworkStatus();
    return(
        <div className="flex justify-between items-center border border-gray-300 m-2" >
            <div className="w-20 h-auto">
                <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"/>
            </div>
            <div className="nav-items list-none">
                <ul className="flex">
                    <li className="mr-5"><Link to="./">Home</Link></li>
                    <li className="mr-5"><Link to="/about">About</Link></li>
                    <li className="mr-5"><Link to="/contact">Contact Us</Link></li>
                    <li className="mr-5">Cart</li>
                    <li className="mr-5">Online Status : {onlineStatus ? "✅" : "🔴" } </li>
                </ul>
            </div>
        </div>
    )
};
export default Header;