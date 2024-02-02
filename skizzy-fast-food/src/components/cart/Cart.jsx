import CartIcon from "./CartIcon"

function Cart() {
  return (
    <button className="btn btn-outline-success d-flex justify-content-around rounded-pill">
        <span className="p-2"><CartIcon /></span>
        <span className="p-2 fw-bold">Your Cart</span>
        {/* Make number rounded and fixed on the cart if possible */}
        <span className="border border-success-subtle p-2 text-success bg-success-subtle rounded">4</span>
    </button>
  )
}

export default Cart