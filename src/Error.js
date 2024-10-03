import { useRouteError } from "react-router-dom"; // useRouteError used to give detailed information for Errors
const Error = () =>
{
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>SOMETHING WENT WRONG !!!</h1>
            <h3>{err.status} : {err.statusText}</h3>
        </div>
    )
}
export default Error;