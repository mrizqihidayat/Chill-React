import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes"; // Import dari folder routes

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}