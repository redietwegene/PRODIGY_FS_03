import React from 'react';
import Navbar from "./NavBar";
import Footer from "./Footer";

function Contactus() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div className="m-16">
          <div className="container mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                Have any questions or feedback? Feel free to reach out to us using the contact details below:
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> contact@ Ecommerce.com
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong> Bole ,Addis Ababa
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contactus;
