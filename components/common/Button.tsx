interface Props {
  type?: "submit" | undefined;
  onClick?: () => void;
  size: "sm" | "base" | "lg";
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
    case "sm":
      sizeClass = "text-sm py-3";
      break;
    case "lg":
      sizeClass = "text-lg py-4";
      break;
    default:
      sizeClass = "text-base py-4";
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
      className={`px-12 bg-cyan text-white font-bold ${sizeClass} ${radiusClass}`}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
};

export default Button;
