import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";

const MainLayOut = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;