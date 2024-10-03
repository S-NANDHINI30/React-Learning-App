import React from "react";
import ReactDOM from "react-dom/client";
import RestaurantBody from "./Body";
import Header from "./Header";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom"; //Router provider provides the router to the component
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import HooksDemo from "./Hooks";
const AppLayout=()=>
{
    return(
        <div className="app">
            <Header></Header> 
            <Outlet></Outlet>    
            {/* outlet replaced by the component */}
            {/** if path =/ */}
            {/* <RestaurantBody></RestaurantBody> */}
            {/** if path = /about */}
            {/* <About/> */}
            {/** if path = /contact */}
            {/* <Contact/> */}
            {/* call the component */}
        </div>
    )
}
const appRouter= createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
        {
                path:"/",
                element:<RestaurantBody/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId", // resid is dynamic, every restaurants have unique id
            element:<RestaurantMenu/>
        },
        {
            path:"hooks", 
            element:<HooksDemo/>
        },    
        ],
        errorElement:<Error/>
    }, 
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout></AppLayout>)
root.render(<RouterProvider router={appRouter} />) // call the component router and render the appRouter function