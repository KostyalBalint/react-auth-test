import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./Main";
import {
  AuthContextProvider,
  useAuth,
} from "./providers/auth/AuthContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RequireAuth } from "./compontents/auth/RequireAuth";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "team",
          element: <RequireAuth />,
          children: [
            {
              path: "/loginRequired",
              element: <div>Logged in</div>,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <AuthContextProvider>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
