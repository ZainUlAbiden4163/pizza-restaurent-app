import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "bg-yellow-400 text-sm uppercase font-semibold text-stone-800 tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + " py-3 px-4 md:px-6 md:py-4 ",
    small: base + " py-1 px-2 md:px-3 md:py-2 text-xs",
    rounded: base + "  px-1.5 py-0.5 md:px-2.5 md:py-1  text-sm rounded-full",
    secondary:
      "border-2 rounded-full py-3 px-4 border-stone-200 text-stone-400 hover:border-stone-700 hover:text-stone-700 transition-all duration-300 focus:outline-none hover:bg-stone-200  ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
