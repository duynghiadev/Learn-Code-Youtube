import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo } from 'react';

const ThemeSwitch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const memoizedSearchParams = useMemo(
    () => searchParams ?? new URLSearchParams(),
    [searchParams],
  );

  const getThemeFromQuery = () => {
    const paramsTheme = memoizedSearchParams.get('theme');
    let localTheme = paramsTheme;
    if (typeof window !== 'undefined') {
      localTheme = localStorage.getItem('theme');
    }
    return paramsTheme || localTheme || 'light';
  };

  const theme = getThemeFromQuery();

  const createQueryString = useCallback(
    (value: string) => {
      const params = new URLSearchParams(memoizedSearchParams);
      params.set('theme', value);
      return params.toString();
    },
    [memoizedSearchParams],
  );

  const toggleTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    router.push(`${pathname}?${createQueryString(newTheme)}`);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('theme', newTheme);
    }
  };

  const renderTheme = (themeName: string) => {
    const removeClass = themeName === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(removeClass);
    document.body.classList.add(themeName);
  };

  useEffect(() => {
    renderTheme(theme);
  }, [theme]);

  return (
    <label
      htmlFor="theme-switch"
      className="relative inline-flex items-center cursor-pointer"
    >
      <input
        type="checkbox"
        className="sr-only peer"
        id="theme-switch"
        name="theme-switch"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600" />
    </label>
  );
};

export default ThemeSwitch;
