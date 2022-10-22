type Props = {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({children}: Props) => {
  return (
    <button className="bg-blueBtn text-white px-5 py-3 rounded-xl font-medium text-xl">{children}</button>
  )
}

export default Button