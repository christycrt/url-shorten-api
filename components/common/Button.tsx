interface Props {
  type?: "submit" | undefined;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ type, children, onClick }) => {
  return (
    <button
      type={type}
      className={`py-4 bg-cyan text-white font-bold ${
        children === "Get Started"
          ? "rounded-full px-12  text-lg"
          : "rounded-md px-3 text-base"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
