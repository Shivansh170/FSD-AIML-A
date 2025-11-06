import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <h1 className="text-3xl text-black text-center animate-pulse">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <h1 className="text-2xl text-red-600 text-center">Error: {error}</h1>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5 mx-auto w-11/12 gap-6">
      {items.map((e) => (
        <ItemCard
          key={e.id}
          imageURL={e.image}
          title={e.title}
          price={e.price}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
