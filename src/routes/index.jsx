import { Route, Routes } from "react-router-dom";


import App from "../App";
import Dashboard from "../pages/Dashboard";


export default function Index() {
    return (
        <Routes>
            <Route   exact path='/' element={<App />} />
            <Route path='Dashboard' element={<Dashboard />} />
        </Routes>
    )
}