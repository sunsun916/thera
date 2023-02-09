import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <>
        <Header />
        <ProductList />
        <Routes>
          <Route path="/shop" element={<ProductList />} />
        </Routes>
    </>
  );
}

export default App;
