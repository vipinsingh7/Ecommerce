import { useSelector } from "react-redux";
import Card from "../components/Card";
import { remove } from "../redux/cartSlice";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  if (cartItems.length === 0) {
    return <h1>cart is empty 🥱</h1>;
  } else {
    return (
      <section id="productsWrapper">
        {cartItems.map((item) => {
          return (
            <Card key={item.id} item={item} btnText="remove" feature={remove} />
          );
        })}
      </section>
    );
  }
};

export default Cart;
