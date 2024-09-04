import "@/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFound from "@/pages/NotFound";
import Reactive from "./pages/test/Reactive/Reactive";
import TestPage from "./pages/test/TestPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<TestPage />} />
        <Route path="/reactive" element={<Reactive />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
