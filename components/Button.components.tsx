import {useRouter} from 'next/router'
type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  rounded?: string;
  route?: string;
  version?: string;
};

export const Button = ({ children, rounded, version, onClick, route }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    const newRoute = route?.replace(/\s/g, '-').toLocaleLowerCase()
    router.push(`/hotel-list/${newRoute}`)
  }

  const buttonVersion = () => {
    switch (version) {
      case 'clear':
        return (
          <button
            className="bg-transparent text-black dark:text-[#fafafa] px-5 py-3 rounded-full font-medium text-xl border border-black dark:border-[#fafafa] hover:bg-slate-200 dark:hover:text-[black]"
            style={{ borderRadius: rounded }}
            onClick={handleClick}
          >
            {children}
          </button>
        );
      default:
        return (
          <button
            className="bg-blueBtn text-white px-5 py-3 rounded-xl font-medium text-xl"
            style={{ borderRadius: rounded }}
            onClick={handleClick}
          >
            {children}
          </button>
        );
    }
  };

  return (
    <>{buttonVersion()}</>
  );
};
