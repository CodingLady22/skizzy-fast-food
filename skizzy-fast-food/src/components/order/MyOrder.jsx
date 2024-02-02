import {useState} from 'react'

function MyOrder() {

    const [itemQuantity, setItemQuantity] = useState({})

  const increment = (itemId) => {
    setItemQuantity(prevQuantity => ({
      ...prevQuantity,
      [itemId] : (prevQuantity[itemId] || 0) + 1
    }))
  };

  const decrement = (itemId) => {
    setItemQuantity(prevQuantity => ({
      ...prevQuantity,
      [itemId] : Math.max((prevQuantity[itemId] || 0) - 1, 0)
    }))
  };
  return (
    <div>
        <div>
            <button onClick={() => decrement(item.id)}>-</button>
            <input type="number" value={itemQuantity[item.id] || 0} readOnly className='input-style' />
            <button onClick={() => increment(item.id)}>+</button>
          </div>
    </div>
  )
}

export default MyOrder