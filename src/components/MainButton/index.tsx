import { Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";

interface IProps {
  variant?: "primary" | "gradient" | "outline" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  to?: string;
  href?: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  block?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-primary hover:bg-primary/90 text-white",
  gradient: "bg-gradient-to-tr from-pink-500 to-yellow-500 text-white",
  outline: "border-2 border-primary bg-transparent text-primary",
  secondary: "bg-gray-500 hover:bg-gray-600 text-white",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const roundedStyles = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
};

const sizeStyles = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function MainButton({
  variant = "primary",
  rounded = "md",
  size = "md",
  type = "button",
  to,
  href,
  isDisabled = false,
  isLoading = false,
  block = false,
  children,
  onClick,
  ...otherProps
}: IProps) {
  const baseClasses = `${variantStyles[variant]} ${sizeStyles[size]} ${roundedStyles[rounded]} ${
    block ? "w-full" : ""
  } flex items-center justify-center gap-x-3 shadow-md min-w-[96px] font-semibold ser-select-none cursor-pointer`;
  const SpinnerComponent = <Spinner color='white' size='sm' />;

  if (to) {
    return (
      <Link to={to} tabIndex={-1} className={baseClasses} {...otherProps}>
        {children}
      </Link>
    );
  } else if (href) {
    return (
      <a href={href} tabIndex={-1} className={baseClasses} {...otherProps}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} tabIndex={-1} disabled={isDisabled} className={baseClasses} onClick={onClick} {...otherProps}>
      {isLoading && SpinnerComponent}
      {children}
    </button>
  );
}
