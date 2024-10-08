import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import OrderSummary from "./Components/OrderSummary";
import NoMatch from "./Components/NoMatch";
import Products from "./Components/Products";
import Featured from "./Components/Featured";
import New from "./Components/New";
import Users from "./Components/Users";
import UserDetails from "./Components/UserDetails";
import Admin from "./Components/Admin";

const LazyAbout = React.lazy(() => import("./Components/About"));   //dynamic import
//lazy loading = the code will be installed whenever required

function App() {
  return (
    <>
      <Navbar /> {/* configuring routes using links */}
      <Routes>
        {" "}
        {/* configuring routes */}
        <Route path="/" element={<Home />} />
        <Route
          path="/About"
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route index element={<Featured />} />{" "}
          {/* this will be present in ui when only product route is there*/}
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<NoMatch />} /> {/* No match Route */}
        <Route path="users" element={<Users />}>
          {" "}
          {/* Dynamic routes */}
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
