import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  const baseStyles =
    "rounded-xl font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-300",
    secondary:
      "bg-neutral-200 text-neutral-800 hover:bg-neutral-300 focus:ring-neutral-300",
    danger: "bg-error-500 text-white hover:bg-error-600 focus:ring-error-300",
  };

  const sizes = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-4 py-2",
    lg: "text-base px-6 py-3",
  };

  return (
    <button
      {...props}
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
    >
      {children}
    </button>
  );
};

export default Button;
