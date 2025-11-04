import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-black py-5 flex justify-between items-center px-5">
      <h1 className="text-white text-xl font-bold">Shopping App</h1>

      <nav>
        <button
          to="/"
          className="text-white px-4 py-2 border border-white rounded hover:bg-white hover:text-black transition"
        >
          View Cart
        </button>
      </nav>
    </header>
  );
}
