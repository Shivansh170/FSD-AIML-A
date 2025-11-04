import { useState } from "react";
export default function Cart({ title, imageURL, price }) {
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    let count = quantity;
    count--;
    if (count >= 0) setQuantity(count);
    else setQuantity(0);
  };
  const increment = () => {
    let count = quantity;
    count++;
    setQuantity(count);
  };
  const addToCart = () => {
    alert(`${title} added to the cart`);
  };
  return (
    <div className="flex flex-col gap-3 p-4 border border-gray-300 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 w-64 bg-white">
      <img
        src={imageURL}
        alt={title}
        className="w-full h-40 object-cover rounded-lg"
      />

      <h1 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {title}
      </h1>

      <h2 className="text-md font-medium text-gray-700">
        Price:{" "}
        <span className="text-green-600 font-bold text-lg">₹{price}</span>
      </h2>

      <div className="flex items-center justify-between gap-3 w-full">
        <button
          className="px-2 text-lg font-bold rounded-full bg-black text-white items-center hover:bg-gray-200"
          onClick={decrement}
        >
          –
        </button>
        <span className="text-lg font-medium">{quantity}</span>
        <button
          className="px-2 text-lg font-bold rounded-full bg-black text-white items-center hover:bg-gray-200"
          onClick={increment}
        >
          +
        </button>
      </div>

      <button
        className="mt-2 bg-black text-white py-2 rounded-xl hover:bg-gray-900 transition-colors duration-200"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}
