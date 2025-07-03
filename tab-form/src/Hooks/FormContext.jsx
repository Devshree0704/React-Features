import { createContext } from "react";
import { useState } from "react";

export const FormContext = createContext();

export const FormContextProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const [details, setDetails] = useState({});
  return (
    <FormContext.Provider
      value={{ tabIndex, setTabIndex, details, setDetails }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
