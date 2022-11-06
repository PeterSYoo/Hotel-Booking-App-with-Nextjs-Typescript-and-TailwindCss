import { useEffect } from 'react';
import { BsFillSunFill, BsMoonStars } from 'react-icons/bs';
import { applyThemePreference } from '../applyThemePreference';
import useThemeStore from '../stores/useThemeStore';

export const ThemeButton = () => {
  const toggleTheme = useThemeStore((state: any) => state.toggleTheme);
  const theme = useThemeStore((state: any) => state.theme);

  useEffect(() => {
    applyThemePreference(theme);
  }, [theme]);

  if (theme === 'dark') {
    return (
      <>
        <button onClick={toggleTheme} type="button">
          <BsFillSunFill size={25} />
        </button>
      </>
    );
  } else {
    return (
      <>
        <button onClick={toggleTheme} type="button">
          <BsMoonStars size={25} />
        </button>
      </>
    );
  }
};
