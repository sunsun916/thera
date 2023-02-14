import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SubBanner from "./components/SubBanner";
import ProductList from "./pages/ProductList";
import GlobalStyles from "./assets/style/GlobalStyle";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import CartList from "./pages/CartList";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <SubBanner />

      <Routes>
       <Route path="/" element={<Shop />} />
       <Route path="/shop">
          <Route index element={<ProductList />} />
          <Route path=":itemId" element={<ProductPage />} /> 
       </Route>
        <Route path="/cartList" element={<CartList />} />
      </Routes> 

      <Footer />
    </>
  );
}

export default App;
