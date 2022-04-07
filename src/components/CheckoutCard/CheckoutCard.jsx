import "./checkout-card.css";
import { useCartContext } from "../../context/cart-context";

const CheckoutCard = () => {
  const { cartState } = useCartContext();

  const itemsInCartTotalPrice = cartState.cart.reduce(
    (acc, curr) => acc + curr.price * curr.cartQuantity,
    0
  );

  const totalPriceAfterDiscount = cartState.cart.reduce(
    (acc, curr) => acc + curr.discountedPrice * curr.cartQuantity,
    0
  );

  const totalDiscount = itemsInCartTotalPrice - totalPriceAfterDiscount;

  return (
    <div className="checkout-card">
      <h3>PRICE DETAILS</h3>
      <hr />
      <span className="span__container">
        <span>price ({cartState.cart.length} items)</span>
        <span>Rs. {itemsInCartTotalPrice}</span>
      </span>
      <span className="span__container">
        <span>Discount</span>
        <span>Rs. {totalDiscount}</span>
      </span>
      <span className="span__container">
        <span>Delivery Charge</span>
        <span>Free</span>
      </span>

      <hr />

      <span className="amount__container">
        <h4>TOTAL AMOUNT</h4>
        <h4>Rs. {totalPriceAfterDiscount}</h4>
      </span>
      <hr />
      <h4>You will save {totalDiscount} on this order</h4>

      <div className="CTA-container">
        <div className="CTA__btn">PLACE ORDER</div>
      </div>
    </div>
  );
};

export default CheckoutCard;
