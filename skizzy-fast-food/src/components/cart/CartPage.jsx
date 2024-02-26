import { Container, Row, Col, Button } from 'react-bootstrap';
import menuItems from "../../menuItems"
import { CartContext } from "../../context/cartContextProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import CartItem from "./CartItem"
import DeliveryOptions from './DeliveryOptions';

function CartPage() {

  let navigate = useNavigate()

  function handleClick() {
    navigate("/#menu")
  }

  const { cartItem, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);
  const cartIsEmpty = Object.values(cartItem).every(quantity => quantity === 0);

  // Calculate subtotal and total
  const subTotal = Object.entries(cartItem).reduce((total, [itemId, quantity]) => {
    const menuItem = menuItems.find(item => item.id === itemId);
    return total + (menuItem ? menuItem.price * quantity : 0)
  }, 0)

  console.log(subTotal);


  return (
    <section className='cart-section'>
      <Container fluid>
      <Row>
        <Col lg={9} md={8} xs={12}>
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
                <div className="col-sm-4">
                  <div className="">
                  <div key={itemId} className="card mb-3 p-3">
                    <CartItem data={menuItem} quantity={quantity} />
                    <div className="mb-2">
                      <button className="special-btn  fw-bold" onClick={() => removeFromCart(itemId)}> - </button>
                      <input type="text" 
                        value={quantity}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), itemId)}
                        className="cart-input text-center mx-2" />
                      <button className="special-btn" onClick={() => addToCart(itemId)}> + </button>
                    </div>
                  </div>
                </div>
                </div>
              )
            }
            return null;
          })}
        </div>
        )}
      </div>
      </Col>
      <Col lg={3} md={4} sm={12} className='border border-light-subtle py-5 px-3 100vh mb-5'>
          <div className="col">
            <div className="">
              <p>Subtotal: €{subTotal.toFixed(2)}</p>
            </div>
          </div>
          {/* Add code for delivery options */}
          <div>
            <button className="btn btn-outline-primary me-2">Checkout</button>
            <button onClick={handleClick} className="btn btn-outline-success ms-2">Back to Menu</button>
          </div>
      </Col>
      </Row>
      </Container>
    </section>
  )
}

export default CartPage