import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";
import UpdateProduct from "../Pages/UpdateProduct/UpdateProduct";
import MyCart from "../Pages/MyCart/MyCart";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage/>,
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct/></PrivateRoute>,
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><BrandProducts/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/:id',
                element: <PrivateRoute><ProductDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/update/:id',
                element: <UpdateProduct/>,
                loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart/></PrivateRoute>,
                loader: () =>  fetch('http://localhost:5000/carts/myCart'),
            }
        ]
    }
])

export default router;