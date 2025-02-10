import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginPopUp from "./components/LoginPopup/LoginPopUp";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import ProductDetails from "./pages/ProductsDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import OrderSuccess from "./pages/OrderSuccess/OrderSuccess";
import OrderTracking from "./pages/OrderTracking/OrderTracking";
import OrderHistory from "./pages/OrderHistory/OrderHistory";
import PaymentStatus from "./Payment/PaymentStatus";
import Success from "./components/SSL_Commerce/Success";
import Fail from "./components/SSL_Commerce/Fail";
import Cancel from "./components/SSL_Commerce/Cancel";
import { AuthProvider } from "./context/AuthContext";
import Dashboard from "./components/admin/Dashboard";
import OrdersList from "./components/admin/OrdersList";
import PrivateRoute from "./routes/PrivateRoute";
import ServicePage from "./pages/ServicePage/ServicePage";

const App = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS if you intend to use it
  }, []);

  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <ToastContainer />
        {showLogin && <LoginPopUp setShowLogin={setShowLogin} />}
        <Header setShowLogin={setShowLogin} />
        <main>
          <Routes>
            <Route path="/service" element={<ServicePage />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order" element={<PlaceOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/payment-status" element={<PaymentStatus />} />
            <Route path="/success" element={<Success />} />
            <Route path="/fail" element={<Fail />} />
            <Route path="/cancel" element={<Cancel />} />
            {/* Admin Routes */}
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute adminOnly={true}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <PrivateRoute adminOnly={true}>
                  <OrdersList />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>  
    </CartProvider>
    </AuthProvider>
  );
};

export default App;
