# React Hooks
(Normal JS utility functions)
- useState() - superpowerful State Variables in react 
- useEffect()

# 2 types of Routing in web apps
- Client Side Routing -> Just loads the component in a single page (no network calls).
- Server Side Routing -> make a network call and that page .html is coming from the server.

<!-- class function -->
# 3 --Mounting--Updating--Unmounting
constructor(dummy)
Render (dummy)
<html dummy>
component did mount
<API call>
<this.setState> ->state variable is updated 
--update
render(Api data)
<html is loaded with new api data>
--call component did update

<!-- Dom manipulating is expensive react tries to batch up the render,mounting 
batch up things to all its children that's why react is fast -->

<!-- when mounting state gets finished the component renders quickly
constructor calls once
when we do the setstate updating state starts , it updates the state variable, react triggers the render once again
it will update the dom with the new value  -->

mounting
-showing onto the ui 

component unmounting
-it will disapper from the html (removing from the ui)

# 4 Suspense - component (Lazy Loading)
Suspense with fallback attribute used to load piece of jsx meanwhile the actual component is loading 
wrap the components which is not available 

# 5 Redux 

When click on the add button (In Restaraunt Menu) it will dispatches an action which will call the reducer function,
which modifies the slice of the reduce store(cart).
-> To read the data from the card slice, we will use selector to read the data from the store and the selector modifies the react component (gives the data).
-> Subscribe - subscribing to the store(sync with the store) if the data in the store changes header component(cart) will update automatically
-> subscribing done using selectore
Jargons used :
    Dispatch
    Action
    Reducer
    Slice 
    Store
    Subscribe
# react-redux & reactjs.toolkit(rtk)
- Configuring store (rtk) is redux job providing it to react application is react redux

