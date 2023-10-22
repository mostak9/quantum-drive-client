import { useLoaderData } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";


const MyCart = () => {
    const carts = useLoaderData();
    return (
        <div>
            <div className="text-center mt-16">
        <h1 className="text-3xl font-bold">Products to buy</h1>
        <hr className="border-2 border-sky-600 max-w-[120px] my-4 mx-auto rounded-md" />
      </div>
      {
        !carts.length ? <div>
            <h1 className="text-4xl font-bold text-center mt-7">You not add any product to cart</h1>
        </div>: <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
            carts.map(cart => <Cart key={cart._id} cart={cart}/>)
        }
        </div>
      }
            
        </div>
    );
};

export default MyCart;