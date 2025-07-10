import { createContext, useState } from "react";
import Loader from "../Pages/Loader";
// eslint-disable-next-line react-refresh/only-export-components
export const LoadingContext = createContext();
export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <>
        {loading && <Loader />}
        {children}
      </>
    </LoadingContext.Provider>
  );
};
