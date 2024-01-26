import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
