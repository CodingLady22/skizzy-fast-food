import CardForm from "../../components/cardPayment/CardForm";
import DeliveryAddress from "../../components/Address/DeliveryAddress";

function PaymentPage() {
  return (
    <div>
      <DeliveryAddress />
      <CardForm />
    </div>
  );
}
export default PaymentPage;
