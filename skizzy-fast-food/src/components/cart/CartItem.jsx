function CartItem(props) {
    const { id, name, price } = props.data

  return (
    <div className="cart-item mb-3 pb-3">
        <div>
            {name}
        </div>
        <div>€{price.toFixed(2)}</div>
    </div>
  )
}
export default CartItem