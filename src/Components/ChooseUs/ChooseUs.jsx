import expert from "../../assets/icons/expert.png";
import money from "../../assets/icons/money.png";
import quality from "../../assets/icons/quality.png";
const ChooseUs = () => {
  return (
    <div className="px-5">
      <div className="text-center mt-16 mb-6">
        <h1 className="text-3xl font-bold">Why Choose Us</h1>
        <hr className="border-2 border-sky-600 max-w-[120px] my-4 mx-auto rounded-md" />
        <p className="max-w-2xl mx-auto mt-5  text-gray-400">
        we take pride in being more than just a car dealership. Our commitment to excellence and customer satisfaction sets us apart.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5">
        <div className="text-center">
          <img src={expert} className="mx-auto" alt="" />
          <h1 className="text-xl font-bold">Expertise and Experience</h1>
          <p className="text-sm text-gray-500">
            With 15 years in the automotive industry, our team brings
            unparalleled expertise to the table
          </p>
        </div>
        <div className="text-center">
          <img src={money} className="mx-auto" alt="" />
          <h1 className="text-xl font-bold">Transparency and Integrity</h1>
          <p className="text-sm text-gray-500">
          Count on transparent, honest dealings backed by our commitment to your trust and satisfaction.
          </p>
        </div>
        <div className="text-center">
          <img src={quality} className="mx-auto" alt="" />
          <h1 className="text-xl font-bold">Quality Selection</h1>
          <p className="text-sm text-gray-500">
          Our cars undergo rigorous inspections to ensure top-notch quality and reliability.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ChooseUs;
