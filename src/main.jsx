
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Appcontextprovider } from "./context/Appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <Appcontextprovider>
   
      <App />
   
  </Appcontextprovider>
);
