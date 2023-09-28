import ReactDOM  from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import AddPage from "./components/AddPage";
import ErrorPage from "./components/ErrorPage";

const AppLayout=()=>{
    return(
        <div className="body">
            <Outlet/>
        </div>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<LandingPage/>
            },
            {
                path:"/add",
                element:<AddPage/>
            },
            // {
            //     path:"/delete",
            //     element:<DeletePage/>
            // }
        ],
        errorElement:<ErrorPage/>
    },
]);

const root=ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>)