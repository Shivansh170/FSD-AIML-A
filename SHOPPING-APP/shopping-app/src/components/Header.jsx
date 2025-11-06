import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="py-2 bg-black flex text-white justify-between items-center px-3">
        <h1 className="text-2xl">Shopping app</h1>
        <nav className="flex gap-10">
          <Link to="/" className="nav_button">
            Home
          </Link>
          <Link to="/login" className="nav_button">
            Login
          </Link>
          <Link to="/order" className="nav_button">
            Order
          </Link>
          <Link to="/" className="nav_button">
            Cart
          </Link>
        </nav>
      </div>
    </>
  );
}
