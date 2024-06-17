import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CountryTourDetailsPage from "./pages/CountryTourDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/country",
          element: <CountryTourDetailsPage />,
        },
        { path: "/login", element: <AuthPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
