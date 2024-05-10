import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { loadProductsRequest } from './redux/productsRedux';
// components
import Header from './components/views/Header/Header';
import Home from './components/pages/Home/Home';
import ProductPage from './components/pages/ProductPage/ProductPage';
import Cart from './components/pages/Cart/Cart';
import OrderSummary from './components/pages/OrderSummary/OrderSummary';
import OrderSuccess from './components/pages/OrderSuccess/OrderSuccess';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Footer from './components/views/Footer/Footer';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="order" element={<OrderSummary />} />
        <Route path="order/success" element={<OrderSuccess />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;