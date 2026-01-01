import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "@/pages/Home";
import LoginPage from "@/pages/Login";
import PricingPage from "@/pages/Pricing";
import ProductPage from "@/pages/Product";
import AppLayout from "@/pages/AppLayout";
import NotFoundPage from "@/pages/NotFound";
import CityList from "@/components/CityList";

import type { City } from "@/types";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const App = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:9001/cities");
        await sleep(3000);
        const data = await res.json();
        setCities(data);
      } catch {
        alert("There was an error loading cities data...");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<p>Countries</p>} />
          <Route path="form" element={<p>Form</p>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
