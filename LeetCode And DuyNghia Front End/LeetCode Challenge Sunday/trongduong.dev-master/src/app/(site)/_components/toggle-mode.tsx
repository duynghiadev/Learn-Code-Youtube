import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useMemo } from "react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  const switchModes = useMemo(
    () => ({
      dark: "light",
      light: "dark",
    }),
    []
  );

  const handleToggleMode = () =>
    setTheme(switchModes?.[theme as keyof typeof switchModes] || "dark");

  const ModeIcon = theme === "dark" ? Moon : Sun;

  return (
    <ModeIcon className="w-4 h-4 cursor-pointer" onClick={handleToggleMode} />
  );
};
