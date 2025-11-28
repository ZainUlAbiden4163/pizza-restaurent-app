import { useDispatch } from "react-redux";
import Button from "../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteButton({ itemId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItem(itemId))}>
      Delete
    </Button>
  );
}

export default DeleteButton;
