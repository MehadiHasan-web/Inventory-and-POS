import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../modules/Dashboard";
import Master from "../layout/Master";

const ProjectRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master/>,
        children: [
            {
                path: '/',
                element: <Dashboard/>
            }
        ]
    }
]);

export default ProjectRouter