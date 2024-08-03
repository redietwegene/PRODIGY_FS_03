import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import axiosInstance from "../api";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const handleQuantityChange = (productId, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.productId === productId
          ? { ...item, quantity: (item.quantity || 0) + change }
          : item
      )
    );
  };

  useEffect(() => {
    async function fetchCartItems() {
      try {
        const response = await axiosInstance.get("/cart");
        const items = response.data.map(item => ({
          ...item,
          quantity: item.quantity || 1 
        }));
        setCartItems(items);
      } catch (err) {
        console.log(err);
      }
    }
    fetchCartItems();
  }, []);

  const handleDelete = async (item) => {
    try {
      await axiosInstance.delete(`/cart/${item.productId}`);
      setCartItems((prevItems) =>
        prevItems.filter((cartItem) => cartItem.productId !== item.productId)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const calculateTotalPrice = (quantity, price) => {
    return (quantity * price).toFixed(2);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="grid grid-cols-1 gap-6">
        {cartItems.map((item) => (
          <div
            key={item.productId}
            className="flex items-center bg-white p-4 rounded-lg shadow-md"
          >
            <img
              className="w-20 h-20 object-cover mr-4"
              src={item.image}
              alt={item.title}
            />
            <div className="flex-1">
              <p className="font-semibold text-lg">{item.title}</p>
              <div className="flex items-center">
                <button
                  onClick={() => handleQuantityChange(item.productId, -1)}
                  disabled={item.quantity <= 1}
                >
                  <FaMinus className="text-gray-700" />
                </button>
                <p className="mx-2">{item.quantity}</p>
                <button onClick={() => handleQuantityChange(item.productId, 1)}>
                  <FaPlus className="text-gray-700" />
                </button>
              </div>
              <p className="text-gray-700">Price: ${item.price}</p>
              <p className="text-gray-700">
                Total: ${calculateTotalPrice(item.quantity, item.price)}
              </p>
              <button
                className="bg-red-400 text-white px-4 py-2 rounded mt-4"
                onClick={() => handleDelete(item)}
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
