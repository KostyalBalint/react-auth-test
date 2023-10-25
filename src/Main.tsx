import React from "react";
import { Container } from "@chakra-ui/react";
import { useAuth } from "./providers/auth/AuthContextProvider";
import { RequireAuth } from "./compontents/auth/RequireAuth";
import { Router } from "react-router-dom";

export const Main = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Router></Router>
    </Container>
  );
};
