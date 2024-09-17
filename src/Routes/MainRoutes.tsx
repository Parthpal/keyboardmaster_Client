import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products";
import PerProductDetails from "../pages/PerProductDetails";
import Cart from "../pages/Cart";
import CheckoutForm from "../pages/CheckoutForm";
import ThankYouPage from "../pages/ThankYouPage";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import ProductList from "../pages/Dashboard/ProductList";
import AddItems from "../pages/Dashboard/AddItems";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const MainRoutes=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/product/:id",
                element:<PerProductDetails/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/checkout",
                element:<CheckoutForm/>
            },
            {
                path:"/thank-you",
                element:<ThankYouPage/>
            },
            {
                path:"/aboutus",
                element:<AboutUs/>
            },
            {
                path:"/contactus",
                element:<ContactUs/>
            },
        ]
    },

{
    path:'dashboard',
    element:<DashboardLayout/>,
    children:[
        {
        
                path:"productList",
                element:<ProductList/>
        
        },
        {
        
                path:"addItems",
                element:<AddItems/>
        
        }
    ]
}
]
)

export default MainRoutes;