import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
  } from "react-router-dom";
// pages
import Home from "../components/pages/Home/Home";
import ProductPage from "../components/pages/ProductPage/ProductPage";
import Cart from '../components/pages/Cart/Cart';
import OrderSummary from '../components/pages/OrderSummary/OrderSummary';
import OrderSuccess from '../components/pages/OrderSuccess/OrderSuccess';
import About from '../components/pages/About/About';
import NotFound from '../components/pages/NotFound/NotFound';
// layouts
import RootLayout from './RootLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<OrderSummary />} />
            <Route path="order/success" element={<OrderSuccess />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;