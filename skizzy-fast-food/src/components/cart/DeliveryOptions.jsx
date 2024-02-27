
function DeliveryOptions({ cartIsEmpty }) {

    return (
    <div className={`my-4 ${cartIsEmpty ? 'disabled' : ''}`}>
        <label>
        <input
            type="radio"
            name='deliveryChoice'
            id="orderToGo"
            className='my-2 me-2'
            disabled={cartIsEmpty}
        />
        Order to Go
        </label><br />
        <label>
        <input
            type="radio"
            name='deliveryChoice'
            id="delivery"
            className='mt-2 me-2'
            disabled={cartIsEmpty}
        />
        Delivery
        </label>
    </div>
    );
}

export default DeliveryOptions;