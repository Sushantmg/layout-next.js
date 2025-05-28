
import { createContext, useContext } from "react";

type TestContextType = {
  state: string;
  setState: (data: string) => void;
};

export const TestContext = createContext<TestContextType | undefined>(undefined);

export const useTestContext = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error("useTestContext must be used within a TestProvider");
  }
  return context;
};
