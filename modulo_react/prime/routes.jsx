import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home";
import Filme from "./src/pages/Filme";
import Header from "./src/components/Header";
import Favoritos from "./src/pages/Favoritos";
import Erro from "./src/pages/Erro";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="*" element={<Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
