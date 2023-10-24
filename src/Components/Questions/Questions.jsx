const Questions = () => {
  return (
    <div data-aos="fade-left " data-aos-duration="1500">
      <div className=" mt-16 px-5" >
        <h1 className="text-3xl font-bold">Popular Questions</h1>
        <hr className="border-2 border-sky-600 max-w-[120px] my-4  rounded-md" />
      </div>
      <div>
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4"  />
            <div className="collapse-title text-xl font-medium">
            What makes Quantum Drive stand out from other dealerships?
            </div>
            <div className="collapse-content">
              <p>At Quantum Drive, we prioritize customer satisfaction above all else. Our carefully curated selection of vehicles, transparent dealings, and commitment to excellence set us apart. We offer a personalized car-buying experience that empowers you to make the right choice for your automotive needs.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How do I schedule a test drive?
            </div>
            <div className="collapse-content">
              <p>Scheduling a test drive at Quantum Drive is easy! Simply visit our website and navigate to the 'Test Drive' section. From there, you can choose the vehicle you're interested in and select a convenient time for your test drive. If you prefer, you can also give us a call and our friendly staff will assist you in scheduling a test drive.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            How can I get in touch with your customer service team?
            </div>
            <div className="collapse-content">
              <p>You can reach our customer service team by visiting the 'Contact Us' section on our website. There, you'll find our phone number, email address, and a convenient contact form. We're here to assist you with any questions or concerns you may have.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
            What financing options are available?
            </div>
            <div className="collapse-content">
              <p>We offer a range of financing options to suit your needs. Our team works with a network of trusted lenders to provide competitive rates and flexible terms. Whether you're looking for a traditional auto loan or prefer to explore lease options, we're here to help you find the financing solution that fits your budget.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
