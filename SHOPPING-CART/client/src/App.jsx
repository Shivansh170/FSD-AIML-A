import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Cart from "./components/Cart";
export default function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setItems(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="min-h-screen">
        <Header></Header>
        <div className="grid grid-cols-4 py-5 mx-auto w-11/12 gap-y-3">
          {items.map((e) => (
            <Cart
              key={e.id}
              imageURL={e.image}
              title={e.title}
              price={e.price}
            />
          ))}
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}
