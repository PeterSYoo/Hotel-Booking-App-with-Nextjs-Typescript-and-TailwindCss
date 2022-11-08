import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { BsFillSunFill, BsMoonStars } from 'react-icons/bs';
// import { applyThemePreference } from '../applyThemePreference';
// import useThemeStore from '../stores/useThemeStore';

export default function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // const toggleTheme = useThemeStore((state: any) => state.toggleTheme);
  // const theme = useThemeStore((state: any) => state.theme);

  // useEffect(() => {
  //   applyThemePreference(theme);
  // }, [theme]);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <>
          <button onClick={() => setTheme('light')} type="button">
            <BsFillSunFill size={25} />
          </button>
        </>
      );
    } else {
      return (
        <>
          <button onClick={() => setTheme('dark')} type="button">
            <BsMoonStars size={25} />
          </button>
        </>
      );
    }
  };

  return <>{renderThemeChanger()}</>;
}
