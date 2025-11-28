import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartPizzaPrice, getCartPizzaQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getCartPizzaQuantity);
  const totalCartPrice = useSelector(getCartPizzaPrice);

  return (
    <div className="bg-stone-800 text-stone-200 uppercase px-4 py-4  sm:px-6 text-sm md:text-base flex items-center justify-between ">
      <p className="text-stone-300 font-semibold space-x-4 sm:space-x-6 ">
        {!totalCartQuantity ? (
          <span>Please Add Something to Cart</span>
        ) : (
          <span>{totalCartQuantity} pizzas</span>
        )}
        <span>${totalCartPrice ? totalCartPrice : "0"}</span>
      </p>

      <Link to="/cart"> Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
