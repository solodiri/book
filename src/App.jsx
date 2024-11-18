import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./compoments/navbar/NavBar";
import NotFound from "./pages/notfound/NotFound";
import AboutUs from "./compoments/about/AboutUs";
import Contact from "./compoments/contact/Contact";
import Footer from "./compoments/footer/Footer";
import Home from "./pages/home/Home";
import BookPage from "./pages/books/BookPage";
import Services from "./compoments/services/Services";
import ScrollToTop from "./compoments/scrollToTop";
import DetailPage from "./pages/detailPage/DetailPage";
import MobileMenu from "./compoments/mubileMenu/MobileMenu";

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const MenuSignToggle = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar
          showMobileMenu={showMobileMenu}
          setShowMobileMenu={setShowMobileMenu}
          MenuSignToggle={MenuSignToggle}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookPage" element={<BookPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/detailPage/:id" element={<DetailPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {showMobileMenu && (
          <MobileMenu
            showMobileMenu={showMobileMenu}
            setShowMobileMenu={setShowMobileMenu}
          />
        )}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
