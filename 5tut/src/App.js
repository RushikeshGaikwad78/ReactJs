import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";

function App() {
  return (
    <>
      <Navbar/>              {/* configuring routes using links */}

      <Routes>                {/* configuring routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary/>}/>
      </Routes>
    </>
  );
}

export default App;
