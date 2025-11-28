import { useSelector } from "react-redux";
import { getUser } from "./userSlice";

function Username() {
  const user = useSelector(getUser);
  if (!user) return null;
  return <div className="text-sm font-semibold hidden md:block">{user}</div>;
}

export default Username;
