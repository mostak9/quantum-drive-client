import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const ProductDetails = () => {
  const product = useLoaderData();
  const [inCart, setInCart] = useState(null);
  const [add, setAdd]  = useState(false);

  useEffect(() => {
    fetch(`https://quantum-drive-server-assignment-10-kggz65yln.vercel.app/cart/${product._id}`)
      .then((res) => res.json())
      .then((data) => setInCart(data));
  }, [product._id])

  console.log(inCart);
  const handleCart =  () => {

     if (inCart) {
      swal("Error!", "Product already exists in cart", "error");
      return;
    }
    fetch("https://quantum-drive-server-assignment-10-kggz65yln.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          swal("Success!", "Product added to cart successfully", "success");
          setAdd(true)
        }
      });
  };
  return (
    <div className="px-5 lg:px-0">
      <div className="mt-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <h1 className="text-4xl font-bold">{product.name}</h1>
            <div className="mt-3">
              <p>
                Brand: <span className="font-bold">{product.brand}</span>
              </p>
              <p>
                Vehicle type: <span className="font-bold">{product.type}</span>{" "}
              </p>
            </div>
          </div>
          <div>
            <button onClick={handleCart} className="btn bg-sky-600" disabled={inCart || add} >
              <AiOutlineShoppingCart className="text-xl" />{(inCart || add) ? "Already added to cart": "Add to cart"} 
            </button>
          </div>
        </div>
        <figure className="mt-7">
          <img src={product.image} className="w-full" alt="" />
          <figcaption className="text-sm italic">
            {product.name}, {product.type}, {product.brand}
          </figcaption>
        </figure>
        <div className="mt-7">
          <p>{product.details}</p>
        </div>
        <div className="mt-12 pb-9">
          <h1 className="text-3xl font-bold">Product Reviews</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3  gap-7 mt-6">
            <div className="rounded-md border p-10 space-y-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p className="text-sm">
                I recently purchased a Toyota from Quantum Drive and I couldn't
                be happier with the experience. The staff was friendly and
                knowledgeable, helping me find the perfect car for my needs. The
                entire process was seamless, from the test drive to the
                financing options. I highly recommend Quantum Drive to anyone in
                search of their next vehicle!
              </p>
              <p className="italic font-bold">John Doe - New Customer</p>
            </div>
            <div className="rounded-md border p-10 space-y-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-7"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-sm">
                I had a great experience at Quantum Drive. The selection of
                vehicles was impressive, and the staff was patient and attentive
                to my preferences. I found a BMW that I absolutely love. The
                only reason I'm giving 4 stars instead of 5 is that the
                paperwork process took a bit longer than I expected. Overall,
                I'm very happy with my purchase.
              </p>
              <p className="italic font-bold">Jane Smith - BMW Enthusiast</p>
            </div>
            <div className="rounded-md border p-10 space-y-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-8"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
              </div>
              <p className="text-sm">
                I've been a customer at Quantum Drive for years and have always
                been impressed with their commitment to quality and customer
                service. Recently, I brought in my Mercedes-Benz for service,
                and the team went above and beyond to ensure everything was
                taken care of efficiently. I trust Quantum Drive for all my
                automotive needs and highly recommend them to others.
              </p>
              <p className="italic font-bold">
                Michael Johnson - Loyal Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
