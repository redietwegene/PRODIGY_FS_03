import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

function AboutPage() {
  return (
      <>
            <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
      <div className="m-16">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-700 mb-4">
              Welcome to [Your Company Name], your go-to destination for the latest and greatest in [Your Product Category]. We are dedicated to providing you with the best products at unbeatable prices, along with excellent customer service.
            </p>
            <p className="text-gray-700 mb-4">
              Our journey began with a simple idea: to make shopping for [Product Category] easier and more enjoyable for everyone. We strive to curate a selection of high-quality products that meet our customers' diverse needs and preferences.
            </p>
            <p className="text-gray-700 mb-4">
              At [Your Company Name], we value transparency, integrity, and customer satisfaction. Our team works tirelessly to ensure that every product we offer meets our strict quality standards. We are always here to help you with any questions or concerns you may have.
            </p>
            <p className="text-gray-700 mb-4">
              Thank you for choosing [Your Company Name]. We look forward to serving you and making your shopping experience a memorable one.
            </p>
          </div>

        
        </div>
      </div>
  </main>
          <Footer />
          </div>
    </>
  );
}

export default AboutPage;
