import Home from "./pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Shop from "./pages/Shop";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import AllCategories from "./components/AllCategories";
import SelectedCategoryContainer from "./components/SelectedCategoryContainer";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user-action";
import { useDispatch } from "react-redux";

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
        path: "auth",
        element: <SignIn />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <AllCategories />,
          },
          {
            path: ":category",
            element: <SelectedCategoryContainer />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      setCurrentUser(user, dispatch);
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              backgroundColor: "#A3B18A",
            },
          },
          error: {
            duration: 5000,
            style: {
              backgroundColor: "#e63946",
            },
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </React.Fragment>
  );
}

export default App;
