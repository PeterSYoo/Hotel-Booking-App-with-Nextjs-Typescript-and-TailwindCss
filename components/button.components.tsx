import { URL } from 'url';
type Props = {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  rounded?: string;
  route?: URL;
  version?: string;
}




const Button = ({children, rounded, version, onClick}: Props) => {
  const buttonVersion = () => {
    switch(version) {
      case 'clear':
        return <button className="bg-transparent text-black px-5 py-3 rounded-full font-medium text-xl border border-black hover:bg-slate-200" style={{borderRadius: rounded}} onClick={onClick}>{children}</button>
      default:
        return <button className="bg-blueBtn text-white px-5 py-3 rounded-xl font-medium text-xl" style={{borderRadius: rounded}} onClick={onClick}>{children}</button>
    }
  }
  return (
    <>
      {buttonVersion()}
    </>
    // <button className="bg-blueBtn text-white px-5 py-3 rounded-xl font-medium text-xl" style={{borderRadius: rounded}}>{children}</button>
    // <button className="bg-blueBtn text-white px-5 py-3 rounded-xl font-medium text-xl" style={{borderRadius: rounded}} onClick={click? click : () => {}}>{children}</button>
  )
}

export default Button