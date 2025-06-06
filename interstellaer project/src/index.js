import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthContextProvider from "./Context/AuthContext"; // 

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <AuthContextProvider> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
 