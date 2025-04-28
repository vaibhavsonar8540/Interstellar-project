import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import axios from "axios";

function Dashboard() {

   const { logoutUser , authstate} = useContext(AuthContext); 
   const { token } = authstate; 
   const [products, setProducts] = useState([]); 

  
  const data=()=>{
    axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products") 
    .then((res) => setProducts(res.data.data))
    .catch((err) => console.log(err));
  }
  useEffect(() => {
    data();
  }, []);
  
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn"onClick={logoutUser}>Logout</button>

        
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* Products table */}
        <ProductsTable data={products}/>
      </div>
    </div>
  );
}

export default Dashboard;
