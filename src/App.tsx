import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./func/ToTop";
import About from "./pages/about";
import Activities from "./pages/activities";
import Contact from "./pages/contact";
import Inklus from "./pages/inklus";
import Main from "./pages/main";
import Mist from "./pages/mist";
import Tsinuy from "./pages/tsinuyjittya";
import Ucmdobrobat from "./pages/ucmdobrobat";
import "./scss/lib/all.scss";
import { Routes, Route } from "react-router";

function App() {
  return (
    <>
      <div className="main_wrapper">
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/dobrobat" element={<Ucmdobrobat />} />
          <Route path="/mist" element={<Mist />} />
          <Route path="/inkluziya" element={<Inklus />} />
          <Route path="/tsinuy" element={<Tsinuy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Main />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
