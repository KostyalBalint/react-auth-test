import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { config } from "../../config";

type User = {
  username: string;
  email: string;
};

type AuthContext = {
  user: User | null;
};

export const AuthContext = createContext<AuthContext | null>(null);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  const getMe = () => {
    //We provide a jwt token in the cookie, and the backend needs to verify the token and return the user data, if the token is valid
    fetch(config.backendUrl + "/getMe")
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setUser(null);
      })
      //TODO: only set the user for testing purposes
      .finally(() => {
        setUser({
          email: "asdf@asdf.com",
          username: "asdf",
        });
      });
  };

  useEffect(() => {
    getMe();
    setInterval(getMe, 1000 * 60 * 5); //Refresh the user data every 5 minutes
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}
