import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";

const MainLayOut = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;