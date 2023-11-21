"use client";

import { ThemeProvider } from "next-themes";
import { FC, HTMLAttributes } from "react";

export interface NextThemeProviderProps
  extends Pick<HTMLAttributes<any>, "children"> {}

const NextThemeProvider: FC<NextThemeProviderProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default NextThemeProvider;
