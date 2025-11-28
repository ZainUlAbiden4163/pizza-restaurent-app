import { Link, useNavigate } from "react-router-dom";

const classes =
  "text-sm text-blue-500 hover:text-blue-700 hover:underline transition-all duration-200";

function LinkButton({ children, to }) {
  const navigate = useNavigate();
  if (to === -1)
    return <button onClick={() => navigate(to)} className={classes}></button>;
  return (
    <Link
      to={to}
      className="text-sm text-blue-500 hover:text-blue-700 hover:underline transition-all duration-200"
    >
      {children}
    </Link>
  );
}

export default LinkButton;
