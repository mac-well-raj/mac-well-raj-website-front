import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Importing Components
import Header from "./components/Navbar";
import Footer from "./components/Footer";

// Import Admin Tools
import AdminLogin from "./helper/isAdmin";

// Importing Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Lenses from "./pages/Lenses";
import LensMore from "./pages/LensMore";

// Importing Admin Routes
import AdminRoutes from "./admin/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/admin" component={Login} />
        <Route exact path="/lenses" component={Lenses} />
        <Route path="/lenses/more" component={LensMore} />
        {AdminLogin === true && AdminRoutes()}
        <Route component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
