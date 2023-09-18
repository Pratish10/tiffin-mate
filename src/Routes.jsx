import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Header from "components/Header";
import Footer from "components/Footer";

const ContactUs = React.lazy(() => import("pages/ContactUs"));
const FAQ = React.lazy(() => import("pages/FAQ"));
const Franchise = React.lazy(() => import("pages/Franchise"));
const Menu = React.lazy(() => import("pages/Menu"));

const Loader = (
  <div className="flex items-center justify-center min-h-screen">
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-info motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
    </div>
  </div>
);

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>{Loader}</>}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/franchise" element={<Franchise />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
