import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import {
  BUSINESS_DETAILS_ROUTE,
  BUSINESS_LIST_ROUTE as HOME_PAGE_ROUTE,
} from "../Constant";
import BusinessDetails from "./BusinessDetails";
export default function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path={HOME_PAGE_ROUTE} element={<App />} />
        <Route path={BUSINESS_DETAILS_ROUTE} element={<BusinessDetails />} />
      </Routes>
    </Router>
  );
}