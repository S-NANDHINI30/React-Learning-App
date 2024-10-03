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