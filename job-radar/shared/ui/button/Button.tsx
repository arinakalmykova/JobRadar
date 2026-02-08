interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  isType: string;
}

export function Button({
  children,
  isLoading,
  disabled,
  isType,
  className = "",
  ...props
}: ButtonProps) {
  const standartClass =
    "px-10 h-12 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/30 transition-all";

  return (
    <button
      disabled={disabled || isLoading}
      className={`
        ${isType === "standart" ? standartClass : ""}
        ${className}
      `}
      {...props}
    >
      {isLoading ? "Загрузка..." : children}
    </button>
  );
}
