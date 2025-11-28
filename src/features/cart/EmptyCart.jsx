import { Link } from "react-router-dom";
import Button from "../ui/Button";
import LinkButton from "../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="py-6 px-4 space-y-5">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      {/* <Link to="/menu">&larr; Back to menu</Link> */}

      <p className="mt-10 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
