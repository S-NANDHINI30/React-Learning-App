import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import useNetworkStatus from "../../CustomHooks/useNetworkStatus";
import 'primeflex/primeflex.css'; // Import PrimeFlex
import UserContext from "../../CustomHooks/userContext";
import { useSelector } from "react-redux";
import { auth, db } from "../../../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const Header = () => {
    const [userDetails, setUserDetails] = useState(null);
    const onlineStatus = useNetworkStatus();
    const cartItems = useSelector((store) => store.cart.items);

    // const fetchUserData = async (user) => {
    //     if (user) {
    //         console.log("User is logged in:", user);
    //         setUserDetails(user);
    //     }
    // };
    const fetchUserData = async (user) => {
        if (user) {
            const userDoc = await getDoc(doc(db, "users", user.uid));
            setUserDetails({ ...user, username: userDoc.data().username });
        }
    };
    useEffect(() => {
        const fetchUser = async () => {
            const unsubscribe = auth.onAuthStateChanged((user) => {
                fetchUserData(user);
            });
            return unsubscribe;
        };
    
        fetchUser();
    }, []);
    
    return (
        <div className="flex justify-content-between border-1 border-gray-500">
            <div>
                <img className="w-6rem" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" />
            </div>
            <div>
                <ul className="flex list-none">
                    <li className="mr-5">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="mr-5"><Link to="./">Home</Link></li>
                    <li className="mr-5"><Link to="/app/about">About</Link></li>
                    <li className="mr-5"><Link to="/app/contact">Contact Us</Link></li>
                    <li className="mr-5"><Link to="/app/cart">Cart ({cartItems.length} items)</Link></li>
                    <li className="mr-5 font-bold">
                        Welcome, {userDetails ? userDetails.email : "Guest"}
                    </li>
                </ul>
            </div>
        </div>
    );
    
};

export default Header;
