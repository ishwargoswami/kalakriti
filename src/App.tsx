import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Wishlist from './pages/Wishlist';
import Profile from './pages/Profile';
import ProfileInfo from './components/profile/ProfileInfo'
import AddressBook from './components/profile/AddressBook';
import OrderHistory from './components/profile/OrderHistory';
import PaymentMethod from './components/profile/PaymentMethods';
import Recommendations from './components/profile/Recommendations';
import NotificationSettings from './components/profile/NotificationSettings';
import ShippingPolicy from './pages/ShippingPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/products/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/shipping-policy" element={<ShippingPolicy />} />
                  <Route path="/return-policy" element={<ReturnPolicy />} />
                  <Route path="/profileinfo" element={<ProfileInfo />} />
                  <Route path="/addressbook" element={<AddressBook/>} />
                  <Route path="/notification" element={<NotificationSettings/>} />
                  <Route path="/orderhistory" element={<OrderHistory />} />
                  <Route path="/payment" element={<PaymentMethod />} />
                  <Route path="/recommendations" element={<Recommendations/>} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Toaster position="top-center" />
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;