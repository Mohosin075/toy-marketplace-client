import { Outlet } from "react-router-dom";
import NavBar from "../shared/navBar/NavBar";
import Footer from "../shared/footer/Footer";
import { ToastContainer } from 'react-toastify';

const MainLayOut = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default MainLayOut;