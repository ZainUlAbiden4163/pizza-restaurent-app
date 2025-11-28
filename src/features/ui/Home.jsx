import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Button from "./Button";
import { getUser } from "../user/userSlice";

function Home() {
  const user = useSelector(getUser);
  return (
    <div
      className="my-10 text-center sm:my-16 px-4
    "
    >
      <h1 className="text-xl text-stone-700 font-semibold  mb-8 md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>
      {user === "" ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Odering, {user}
        </Button>
      )}
    </div>
  );
}

export default Home;
