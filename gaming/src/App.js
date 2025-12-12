import React from "react";
import Contact from "./pages/Contact";
import Index from "./pages/Index";
import ProductDT from "./pages/ProductDT";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // We'll create this next
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/ProductDT/:gameId" element={<ProductDT />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/Cart" element={<Cart />} />

              {/* Protected Routes */}
              <Route path="/" element={
                <ProtectedRoute>
                  < Index/>
                </ProtectedRoute>
              } />

              
              
              <Route path="/Login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
            </Routes>
            <Footer />
          </div>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}