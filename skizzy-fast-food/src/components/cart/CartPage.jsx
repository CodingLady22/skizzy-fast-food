import menuItems from "../../menuItems"
import { CartContext } from "../../context/cartContextProvider"
import { useContext } from "react"
import CartItem from "./CartItem"

function CartPage() {

  const { cartItem, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);
  const cartIsEmpty = Object.values(cartItem).every(quantity => quantity === 0);

  // Calculate subtotal and total
  const subTotal = Object.entries(cartItem).reduce((total, [itemId, quantity]) => {
    const menuItem = menuItems.find(item => item.id === itemId);
    return total + (menuItem ? menuItem.price * quantity : 0)
  }, 0)

  console.log(subTotal);

  return (
    <section className='container cart-section p-5'>
        <h1 className="mb-5 text-center">Your Cart Items</h1>
      <div className="">
        {cartIsEmpty ? (
          <p className="text-center fw-bold fs-2">You currently have no items in your cart</p>
        ) : (
        <div className='row px-5'>
          {Object.entries(cartItem).map(([itemId, quantity]) => {
            const menuItem = menuItems.find(item => item.id === itemId);
            if(quantity !== 0 && menuItem) {
              return (
                <div className="col-sm-5">
                  <div className="">
                  <div key={itemId} className="card mb-3 p-3">
                    <CartItem data={menuItem} quantity={quantity} />
                    <div className="mb-2">
                      <button className="btn btn-outline-secondary fw-bold" onClick={() => removeFromCart(itemId)}> - </button>
                      <input type="text" 
                        value={quantity}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), itemId)}
                        className="cart-input text-center mx-2" />
                      <button className="btn btn-outline-secondary fw-bold" onClick={() => addToCart(itemId)}> + </button>
                    </div>
                  </div>
                </div>
                </div>
              )
            }
            return null;
          })}
          <div className="col">
            <div className="">
              <p>Subtotal: €{subTotal.toFixed(2)}</p>
              <button className="btn btn-outline-primary">Checkout</button>
              <button className="btn btn-outline-success">Back to Menu</button>
            </div>
          </div>
        </div>
        )}
      </div>
    </section>
  )
}

export default CartPage