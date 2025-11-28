import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [querry, setQuerry] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!querry) return;
    navigate(`/order/${querry}`);
    setQuerry("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={querry}
        onChange={(e) => setQuerry(e.target.value)}
        className="rounded-full px-4 py-2 text-sm bg-yellow-300 placeholder:text-stone-400 focus:outline-none w-28 sm:w-64 sm:focus:w-72 transition-all duration-300 focus:ring-2 focus:ring-yellow-100"
      />
    </form>
  );
}

export default SearchOrder;
