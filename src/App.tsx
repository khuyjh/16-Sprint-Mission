import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./layouts/Nav";
import ItemsPage from "./pages/ItemsPage/ItemsPage";
import AddItemPage from "./pages/AddItemPage/AddItemPage";
import ItemDetialsPage from "./pages/ItemDetailsPage/ItemDetailsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/items" replace />} />
        <Route path="/items" element={<ItemsPage />} />
        <Route path="/additem" element={<AddItemPage />} />
        <Route path="/items/:productId" element={<ItemDetialsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
