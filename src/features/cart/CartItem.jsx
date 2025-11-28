import Button from "../ui/Button";
import { formatCurrency } from "../utils/helpers";
import DeleteButton from "./DeleteButton";
import IncDecButton from "../menu/IncDecButton";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-4 flex justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-4">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <IncDecButton id={pizzaId}></IncDecButton>
        <DeleteButton itemId={item.pizzaId}></DeleteButton>
      </div>
    </li>
  );
}

export default CartItem;
