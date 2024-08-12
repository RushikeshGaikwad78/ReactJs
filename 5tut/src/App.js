import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";

function App() {
  return (
    <>
      <Navbar/>              {/* configuring routes using links */}

      <Routes>                {/* configuring routes */}
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/order-summary" element={<OrderSummary/>}/>
        <Route path="*" element={<NoMatch/>}/>                  {/* No match Route */}
      </Routes>
    </>
  );
}

export default App;
