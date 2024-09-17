// AboutUs.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="min-h-screen bg-base-100 text-base-content py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://res.cloudinary.com/dfelm3bvn/image/upload/v1725218201/slider-3_oiof0y.jpg"
              alt="Mechanical Keyboards"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
            <p className="mb-4">
              Welcome to our store! We are passionate about mechanical keyboards, offering high-quality products for enthusiasts, gamers, and professionals alike. Our mission is to provide the best selection of customizable keyboards and accessories tailored to your needs.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
            <ul className="list-disc pl-6">
              <li className="mb-2">Quality products from trusted brands</li>
              <li className="mb-2">Customer satisfaction and support</li>
              <li className="mb-2">Innovation and customization options</li>
              <li className="mb-2">Sustainable and eco-friendly practices</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
          <p className="mb-4">
            Our team of experts ensures you get the best mechanical keyboards and accessories with an unmatched shopping experience. Whether you are a beginner or an enthusiast, we are here to help you find the perfect keyboard to elevate your experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
