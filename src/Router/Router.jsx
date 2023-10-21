import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addProduct',
                element: <AddProduct/>,
            },
            {
                path: '/products/:id',
                element: <BrandProducts/>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/:id',
                element: <ProductDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;