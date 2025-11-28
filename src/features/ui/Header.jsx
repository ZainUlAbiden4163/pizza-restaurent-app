import { Link } from "react-router-dom";
import SearchOrder from "../order/SearchOrder";
import Username from "../user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-200 sm:px-6 flex items-center justify-between ">
      <Link to="/" className="tracking-widest">
        Fast Pizza React App
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
