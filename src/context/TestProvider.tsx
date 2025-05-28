"use client";
import React, { useState } from "react";
import { TestContext } from "./TestContext";

function TestProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState("hello");
  return (
    <TestContext.Provider value={{ state, setState }}>
      {children}
    </TestContext.Provider>
  );
}

export default TestProvider;