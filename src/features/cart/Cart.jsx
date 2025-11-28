import LinkButton from "../ui/LinkButton";
import Button from "../ui/Button";
import CartItem from "../cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";
import { getUser } from "../user/userSlice";
import EmptyCart from "./EmptyCart";

// const fakeCart = [
//   {
//     pizzaId: 12,
//     name: "Mediterranean",
//     quantity: 2,
//     unitPrice: 16,
//     totalPrice: 32,
//   },
//   {
//     pizzaId: 6,
//     name: "Vegetale",
//     quantity: 1,
//     unitPrice: 13,
//     totalPrice: 13,
//   },
//   {
//     pizzaId: 11,
//     name: "Spinach and Mushroom",
//     quantity: 1,
//     unitPrice: 15,
//     totalPrice: 15,
//   },
// ];

function Cart() {
  const user = useSelector(getUser);
  const cart = useSelector(getCart);

  const dispatch = useDispatch();
  if (cart.length > 0)
    return (
      <div className="mt-4">
        <LinkButton to="/menu">&larr; Back to menu</LinkButton>

        <h2 className="my-6 font-bold">Your cart, {user}</h2>
        <ul className="divide-y divide-stone-200">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="mt-6 space-x-4">
          <Button to="/order/new" type="primary">
            Order pizzas
          </Button>

          <Button type="secondary" onClick={() => dispatch(clearCart())}>
            Clear cart
          </Button>
        </div>
      </div>
    );
  return <EmptyCart />;
}

export default Cart;
