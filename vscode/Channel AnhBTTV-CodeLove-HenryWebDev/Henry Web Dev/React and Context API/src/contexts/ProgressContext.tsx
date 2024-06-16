import { createContext, ReactNode } from "react";

interface ProgressContextProviderProps {
  children: ReactNode;
}

export interface ProgressContextDefault {
  lastTime: string;
  status: string;
}

const progressDefault = {
  lastTime: "22/5/21",
  status: "In progress",
};

export const ProgressContext =
  createContext<ProgressContextDefault>(progressDefault);

const ProgressContextProvider = ({
  children,
}: ProgressContextProviderProps) => (
  <ProgressContext.Provider value={progressDefault}>
    {children}
  </ProgressContext.Provider>
);

export default ProgressContextProvider;
