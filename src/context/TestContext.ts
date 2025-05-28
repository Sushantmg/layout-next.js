import { createContext, useContext } from "react";

export const TestContext = createContext<{
  state?: string;
  setState?: (data: string) => void;
}>({});

export const useTextContext = () => useContext(TestContext);