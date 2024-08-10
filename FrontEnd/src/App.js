import "./App.css";
import Cart from "./Customer/components/Cart/Cart.jsx";
import Checkout from "./Customer/components/Checkout/Checkout.jsx";
import Footer from "./Customer/components/Footer/Footer.jsx";
import Navigation from "./Customer/components/navigation/Navigation.jsx";
import Product from "./Customer/components/Product/Product.jsx";
import ProductDetails from "./Customer/components/ProductDetails/ProductDetails.jsx";
import HomePage from "./Customer/Pages/HomePage/HomePage.jsx";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        <Checkout/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
