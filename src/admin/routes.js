import React from "react";
import { Route } from "react-router-dom";

// Importing Admin Pages
import Dashboard from "./pages/Dashboard";
import NavLink from "./pages/NavLink";
import LensCategory from "./pages/LensCategory";
import Lenses from "./pages/Lenses";
import CreateLens from "./pages/CreateLens";
import UpdateLens from "./pages/UpdateLens";
import Queries from "./pages/Queries";

function AdminRoutes() {
  return (
    <>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/admin/navlink" component={NavLink} />
      <Route path="/admin/lens-category" component={LensCategory} />
      <Route path="/admin/lenses" component={Lenses} />
      <Route path="/admin/createLens" component={CreateLens} />
      <Route path="/admin/updateLens" component={UpdateLens} />
      <Route path="/admin/queries" component={Queries} />
    </>
  );
}

export default AdminRoutes;
