interface Props {
  type?: "submit" | undefined;
  onClick?: () => void;
  size: "s-sm" | "sm" | "base" | "lg";
  radius: "full" | "base";
  disable?: boolean;
}

const Button: React.FC<Props> = ({
  type,
  children,
  onClick,
  size,
  radius,
  disable,
}) => {
  let sizeClass;
  switch (size) {
    case "s-sm":
      sizeClass = "text-sm py-2 px-5";
      break;
    case "sm":
      sizeClass = "text-sm py-3 px-12";
      break;
    case "lg":
      sizeClass = "text-lg py-4 px-12";
      break;
    default:
      sizeClass = "text-base py-4 px-12";
      break;
  }

  let radiusClass;
  switch (radius) {
    case "full":
      radiusClass = "rounded-full";
      break;
    default:
      radiusClass = "rounded-md";
      break;
  }

  return (
    <button
      type={type}
      className={`bg-cyan text-white font-bold hover:bg-cyan-hover ${sizeClass} ${radiusClass}`}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
