import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/Profile";

const Home = () => <h2>This is Home</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile/:name",
        element: <Profile />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
