import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Dashboard from "./Dashboard";
import SingleProductPage from "./SingleProductPage";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>


<Routes>
  <Route path="/" element={ <Home/>   } />
  <Route path="/login" element={<Login/>} />
  <Route path="/dashboard" element={

     <PrivateRoute>
      <Dashboard/>
     </PrivateRoute>} />
     
  <Route path="/products/:id" element={<SingleProductPage/>} />
  
</Routes>
    </div>
  );
}

export default AllRoutes;
