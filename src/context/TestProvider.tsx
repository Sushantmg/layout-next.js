
"use client";

import { useState, ReactNode } from "react";
import { TestContext } from "./TestContext";

type Props = {
  children: ReactNode;
};

const TestProvider = ({ children }: Props) => {
  const [state, setState] = useState("hello");

  return (
    <TestContext.Provider value={{ state, setState }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
