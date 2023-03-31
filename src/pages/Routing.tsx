import { Route, Routes } from "react-router-dom";
import Profile from "./Profile/Profile";
import Search from "./Search/Search";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/Profile" element={<Profile />} />
        </Routes>
    )
}

export default Routing;