import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Main } from "./Main";
import { AuthContextProvider } from "./providers/auth/AuthContextProvider";

function App() {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Main />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default App;
