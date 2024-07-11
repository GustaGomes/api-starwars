import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlanetDetail from "./pages/PlanetDetail";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";

// TODO: usar o usePArams para pegar o id do planeta e mostrar tela
// TODO: useNavigate eu vou usar para navegar entre componentes

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detail",
        element: <PlanetDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
