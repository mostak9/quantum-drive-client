import swal from "sweetalert";

const AddProduct = () => {
  

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const details = form.details.value;
        const productInfo = {name, image, price, rating, brand, type, details};
        console.log(productInfo);
        fetch('https://quantum-drive-server-assignment-10-kggz65yln.vercel.app/products', {
          method: 'POST',
          headers: {
            'content-type' :  'application/json',
          },
          body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId) {
            swal("Good job!", "Product added successfully!", "success");
            form.reset();
          }
        })
    }
  return (
    <div className="min-h-screen mt-14 pb-14">
        <div className="text-center mt-16 mb-6">
        <h1 className="text-3xl font-bold">Add Product</h1>
        <hr className="border-2 border-sky-600 max-w-[120px] my-4 mx-auto rounded-md" />
        <p className="max-w-2xl mx-auto mt-5  text-gray-400">
        Fill the form with required fields to add a new product
        </p>
      </div>
      <form onSubmit={handleSubmit} action="" className="space-y-8 px-6">
        {/* name field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" >Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Type product name here"
            className="text-sm input input-bordered w-full"
            required
          />
        </div>
        {/* image field */}
        <div className="flex flex-col gap-2">
          <label htmlFor="image" >Image Link</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Put your image link here"
            className="input input-bordered w-full text-sm"
            required
          />
        </div>
        {/* brand, type, price */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* brand */}
          <div>
            <select name="brand" className="select select-bordered w-full max-w-xs"   required>
              <option disabled selected>
                Choose your brand
              </option>
              <option>Mercedes-Benz</option>
              <option>Bentley</option>
              <option>Honda</option>
              <option>BMW</option>
              <option>Tesla</option>
              <option>Toyota</option>
            </select>
          </div>
          {/* Type */}
          <div>
            <select name="type" className="select select-bordered w-full max-w-xs"  required>
              <option disabled selected>
                Choose your vehicle type
              </option>
              <option>SUV</option>
              <option>Sports Car</option>
              <option>Coupe</option>
              <option>Pickup</option>
              <option>Wagon</option>
              <option>Sedan</option>
            </select>
          </div>
          {/* price */}
          <div className="flex items-center gap-2">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Enter Product price here"
              className="input input-bordered w-full text-sm"
              required
            />
          </div>
          {/* Rating */}
          <div className="flex items-center gap-2">
            <label htmlFor="rating">Rating (out of 5):</label>
            <input
            type="text"
              name="rating"
              id="rating"
  
              placeholder="Rate your product"
              className="input input-bordered w-full text-sm"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
        <label  htmlFor="image" >Product Details</label>
        <textarea  id="details" name="details"  className="textarea textarea-bordered h-40  w-full" placeholder="Write a short description about your product"  required></textarea>
        </div>
        {/* submit button */}

        <div>
            <input type="submit" value="Add Product" className="btn bg-sky-600 w-full" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
