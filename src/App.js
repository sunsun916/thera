import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SubBanner from "./components/SubBanner";
import ProductList from "./pages/ProductList";
import GlobalStyles from "./assets/style/GlobalStyle";


function App() {
  return (
    <>
        <GlobalStyles />
        <Header />
        <SubBanner />
        <ProductList />
        <Routes>
          <Route path="/shop" element={<ProductList />} />
        </Routes>
    </>
  );
}

export default App;
