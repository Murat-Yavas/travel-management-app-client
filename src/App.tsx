import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import CountryTourDetailsPage from "./pages/CountryTourDetailsPage";
import SingleTourDetailsPage from "./pages/SingleTourDetailsPage";
import HotelsPage from "./pages/HotelsPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/tours/country",
          element: <CountryTourDetailsPage />,
        },
        {
          path: "/tours/continent",
          element: <CountryTourDetailsPage isContinentPage={true} />,
        },
        {
          path: "/tours/:id",
          element: <SingleTourDetailsPage />,
        },
        {
          path: "/hotels",
          element: <HotelsPage />,
        },
        { path: "/login", element: <AuthPage /> },
        { path: "/profile", element: <ProfilePage /> },
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
