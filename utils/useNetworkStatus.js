import { useEffect, useState } from "react";

const useNetworkStatus = () =>
{
    const [onlineStatus,setOnlineStatus]=useState(true); //setting boolean values
    useEffect (()=> 
    {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);  
        });
        window.addEventListener("online", () => {
            setOnlineStatus(true);  
        });
    },[]); //will be executed once
    return onlineStatus;
}
export default useNetworkStatus;