import { MdArrowForwardIos } from 'react-icons/md';
type AppProps = {
  crumbs: string[];
};

export const BookingHeader = ({ crumbs }: AppProps) => {
  return (
    <div className="flex flex-row gap-3 items-center mb-10">
      <span>Home</span>
      {crumbs?.map((crumb) => (
        <div
          key={crumb}
          className="flex flex-row justify-start items-center gap-3 last:text-[#B1B5C4]"
        >
          <span className="text-black">
            <MdArrowForwardIos />
          </span>
          <span>{crumb}</span>
        </div>
      ))}
    </div>
  );
};
