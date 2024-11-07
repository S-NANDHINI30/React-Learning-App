import { createContext } from "react";
//usecontext is used to access the context anywhere in the app
const UserContext = createContext({
    loggedInUser: "Default User"  //initialize logged in user
});

export default UserContext;
