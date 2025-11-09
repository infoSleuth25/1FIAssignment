import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";

const router = createBrowserRouter([
  { path: "/", element: <Products /> },
  { path: "/product/:id", element: <ProductDetails /> },
]);

export default function App() {
  return <RouterProvider router={router} />;
}