import { Link } from "react-router-dom";

function DeliveryAddress() {
  return (
    <section className="container p-5">
      <h2 className="my-5">CHECKOUT</h2>

      <form method="" action="" class="row g-3 border p-4 rounded">
        <h3 className="py-3 text-center">Delivery Address</h3>

        <div class="col-12">
          <label for="inputAddress" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="col-12">
          <label for="inputAddress2" class="form-label">
            Address 2
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            City
          </label>
          <input type="text" class="form-control" id="inputCity" />
        </div>
        <div class="col-md-4">
          <label for="inputRegion" class="form-label">
            Region
          </label>
          <select id="inputRegion" class="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class="col-md-2">
          <label for="inputZip" class="form-label">
            Zip/Cap
          </label>
          <input type="text" class="form-control" id="inputZip" />
        </div>
        <div class="col-12">
          <label for="phoneNumber" class="form-label">
            Phone
          </label>
          <input
            type="phone"
            class="form-control"
            id="phoneNumber"
            placeholder="123-456-9999"
          />
        </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Save Address
            </label>
          </div>
        </div>
        <div class="col-12">
          <Link to="">
            <button type="submit" class="btn btn-primary">
              Enter Address
            </button>
          </Link>
        </div>
      </form>
    </section>
  );
}
export default DeliveryAddress;
