import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Customer/components/Footer/Footer.jsx";
import Navigation from "./Customer/components/navigation/Navigation.jsx";
import CustomerRoutes from "./Routers/CustomerRoutes.jsx";

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
