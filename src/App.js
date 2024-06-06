import "./app.sass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/home/shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/apple-copy" element={<Home />} />
        <Route path="/apple-copy/shop" element={<Shop />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
