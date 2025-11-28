import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";
import Button from "../ui/Button";

import { getUser } from "../user/userSlice";

import EmptyCart from "../cart/EmptyCart";

import store from "../../store";
import { clearCart, getCart, getCartPizzaPrice } from "../cart/cartSlice";
import { useSelector } from "react-redux";
import { formatCurrency } from "../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const user = useSelector(getUser);
  useState();

  const formError = useActionData();

  const navigation = useNavigation();

  const isSubmitting = navigation.state === "submitting";
  const cart = useSelector(getCart);
  console.log(cart);

  const totalPrice = useSelector(getCartPizzaPrice);

  const priorityPrice = withPriority ? totalPrice * 0.2 : 0;
  const total = totalPrice + priorityPrice;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6 ">
      <h2 className="text-xl font-semibold mb-8">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40 ">First Name</label>
          <input
            type="text"
            name="customer"
            required
            placeholder="John Cramer"
            className="input grow "
            defaultValue={user}
          />
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              placeholder="0333-1345134"
              className="input w-full  "
            />
            {formError?.phone && (
              <p className="text-xs mt-2 text-red-700 p-2 bg-red-200 text-center rounded-full">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center ">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              placeholder="Street # 1 house # 1 sector , islamabad"
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="h-6 w-6 accent-yellow-400 focus:ring-2 focus:ring-offset-1 focus:ring-stone-500 "
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" value={JSON.stringify(cart)} name="cart" />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting
              ? "Placing Order"
              : ` Order Now ${formatCurrency(total)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  console.log(order);

  const error = {};

  if (!isValidPhone(order.phone))
    error.phone = ` Please Re-type your phone number Correctly. e.g "03336724906" `;
  if (Object.keys(error).length > 0) return error;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
export default CreateOrder;
