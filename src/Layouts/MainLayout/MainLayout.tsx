import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";

const MainLayout: React.FC = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;