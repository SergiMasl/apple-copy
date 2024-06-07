import "./app.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/home/shop/Shop";
import { BagProvider } from "./Context/BagContext";
import BagReview from "./components/home/bag/BagReview";
import Bag from "./components/home/bag/Bag";
function App() {
  return (
    <BagProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/apple-copy" element={<Home />} />
          <Route path="/apple-copy/shop" element={<Shop />} />
          <Route path="/apple-copy/bag" element={<BagReview />} />
          <Route path="/apple-copy/cart" element={<Bag />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </BagProvider>
  );
}

export default App;
