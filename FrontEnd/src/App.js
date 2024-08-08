import "./App.css";
import Footer from "./Customer/components/Footer/Footer.jsx";
import Navigation from "./Customer/components/navigation/Navigation.jsx";
import HomePage from "./Customer/Pages/HomePage/HomePage.jsx";

function App() {
  return (
    <div className="">
      <Navigation />
      <div>
        <HomePage/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
