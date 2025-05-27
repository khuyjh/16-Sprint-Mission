import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./pages/Item";
import AddItem from "./pages/AddItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Item />} />
        <Route path="/additem" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
