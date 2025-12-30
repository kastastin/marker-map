import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/Home";
import PricingPage from "@/pages/Pricing";
import ProductPage from "@/pages/Product";
import NotFoundPage from "@/pages/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
