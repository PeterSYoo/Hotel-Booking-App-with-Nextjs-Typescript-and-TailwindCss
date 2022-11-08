import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { MoonLoader } from 'react-spinners';

export const LoadingSpinner = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (currentTheme === 'dark') {
    return (
      <>
        <div className="min-w-screen min-h-screen mt-10 flex justify-center">
          <MoonLoader color="#919191" size="30" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="min-w-screen min-h-screen mt-10 flex justify-center">
          <MoonLoader color="#545454" size="30" />
        </div>
      </>
    );
  }
};
