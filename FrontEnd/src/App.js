import "./App.css";
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
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
