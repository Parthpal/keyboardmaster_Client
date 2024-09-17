import { NavLink, Outlet } from "react-router-dom";
//import useCart from "../hooks/useCart";
//import useAdmin from "../hooks/useAdmin";


const DashboardLayout: React.FC = () => {
    //const [cart] = useCart();
    return (
        <div className="flex">
            {/* dashboard side bar */}

            <div className="w-64 min-h-screen bg-[#1A0F91] text-white ">
                <ul className="menu p-4 text-base">
            <div className="flex align-middle py-4">
            <a className="normal-case text-xl font-semibold hidden md:block text-white">Keyboard Master</a>
            </div><>
                            <li>
                                <NavLink to="/dashboard/ProductList">
                                    Product List</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItems">
                                    Add Product</NavLink>
                            </li>
                        </>
                    
                    {/* shared nav links */}
                    <div className="divider divider-info"></div>
                    <li>
                        <NavLink to="/">
                            
                            Home</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashboardLayout;