import CartIcon from "./CartIcon"

function Cart() {
  return (
    <button className="btn btn-outline-success me-3 d-flex justify-content-around rounded-pill">
        <span className=""><CartIcon /></span>
    </button>
  )
}

export default Cart