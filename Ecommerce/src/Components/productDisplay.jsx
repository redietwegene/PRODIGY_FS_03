import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import axiosInstance from "../api";
import Navbar from "./NavBar";
import Footer from "./Footer";

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(result => setProducts(result));
  }, []);

  const handleAddToCart = async (product) => {
    try {
      // Fetch the image and convert it to a base64 string
      const response = await fetch(product.image);
      const blob = await response.blob();
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64data = reader.result;
        const productWithBase64Image = { ...product, image: base64data };
        const response = await axiosInstance.post("/addToCart", productWithBase64Image);
        console.log(response.data);
      };
    } catch (err) {
      console.log(err);
    }
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
    <Navbar/>
    <div className="m-16">
      <div className="container mx-auto ">
        <div className="grid grid-cols-4 gap-7">
          {products.map((item) => (
            <div className="bg-white p-4 rounded-lg shadow-md" key={item.id}>
              <img className="w-40 h-40 object-cover mb-4" src={item.image} alt={item.title} />
              <p className="font-semibold text-lg mb-2">{item.title}</p>
              <p className="text-gray-700 mb-4">${item.price}</p>
              <div className="flex justify-between">
                <button 
                  className="bg-orange-300 text-white px-4 py-2 rounded" 
                  onClick={() => handleViewDetails(item)}
                >
                  View Details
                </button>
                <button
                  className="text-gray-700 cursor-pointer"
                  onClick={() => handleAddToCart(item)}>
                    Add To Cart
                  </button>
               
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 overflow-y-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img className="w-full h-64 object-cover mb-4" src={selectedProduct.image} alt={selectedProduct.title} />
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <p className="text-gray-700 mb-4 font-semibold">${selectedProduct.price}</p>
            <form onSubmit={(e) => { e.preventDefault(); handleAddToCart(selectedProduct); }}>
              <button 
                type="submit"
                className="bg-red-400 text-white px-4 py-2 rounded"
              >
                Add to Cart
              </button>
            </form>
            <button 
              className="bg-red-400 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      </div>
      <Footer/>
    </>
  );
}

export default ProductDisplay;
