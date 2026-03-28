import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const addUser = (userData) => {
    const syntheticId = Date.now();
    setUsers((prevUsers) => [{ id: syntheticId, ...userData }, ...prevUsers]);
  };

  const value = useMemo(
    () => ({
      users,
      setUsers,
      addUser,
      isLoading,
      setIsLoading,
      error,
      setError,
    }),
    [users, isLoading, error]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useUsers() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within UserProvider");
  }
  return context;
}
