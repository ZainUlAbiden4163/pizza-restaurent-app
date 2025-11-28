import { useDispatch, useSelector } from "react-redux";
import Button from "../ui/Button";
import {
  currentItemId,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../cart/cartSlice";

function IncDecButton({ id }) {
  const dispatch = useDispatch();
  const getCurrentItemId = useSelector(currentItemId(id));

  return (
    <div className="flex items-center gap-2 md:gap-4">
      <Button type="rounded" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>
      <span className="font-sm font-semibold">{getCurrentItemId}</span>
      <Button type="rounded" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default IncDecButton;
