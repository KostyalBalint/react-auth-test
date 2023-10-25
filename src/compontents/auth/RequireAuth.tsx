import { useAuth } from "../../providers/auth/AuthContextProvider";
import { useFromLocation } from "../../providers/auth/useFromLocation";
import React from "react";
import { Outlet } from "react-router-dom";

export const RequireAuth = () => {
  const { user } = useAuth();
  return <ProtectedRoute hasAccess={!!user} redirect="/login" />;
};

function Navigate(props: { to: string; state: { from: string } }) {
  return null;
}

const ProtectedRoute = ({
  hasAccess,
  redirect,
}: {
  hasAccess: boolean;
  redirect: string;
}) => {
  const from = useFromLocation();

  if (!hasAccess) {
    return <Navigate to={redirect} state={{ from }} />;
  }

  return <Outlet />;
};
