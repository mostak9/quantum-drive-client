import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";


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
            }
        ]
    }
])

export default router;