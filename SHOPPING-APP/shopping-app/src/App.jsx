import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import UserDashboard from "./pages/UserDashboard";
import ShoppingCart from "./components/ShoppingCart";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserDashboard />}>
            <Route path="/" index element={<ShoppingCart />} />
          </Route>
          <Route
            path="/login"
            index
            element={<h1>Hello I am the login page</h1>}
          />
          <Route
            path="/register"
            element={<h1>Hello I am the register page</h1>}
          />

          <Route path="/order" element={<h1>Hello I am the order page</h1>} />
          <Route path="*" element={<h1>Error page</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
