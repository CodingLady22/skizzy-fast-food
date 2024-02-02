import { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import menuItems from '../../menuItems';

function Menu() {

  // Set default initial menu to the first category in the array
    const [selectedCategory, setSelectedCategory] = useState(menuItems[0].category);

    const [cart, setCart] = useState([]);
    const [addedItemMessages, setAddedItemMessages] = useState('')

    // filter through the menu to display items based on selected category
    const filteredMenuItems = menuItems.filter(item => item.category === selectedCategory);
  
    // Make categories unique to avaoid duplicates for each item with the same category
    const uniqueCategories = [...new Set(menuItems.map(item => item.category))];
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };

    const addToCart = (item) => {
      if(cart.find(cartItem => cartItem.id === item.id)) {
        // if item is already in the cart, remove it
        setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== item.id));
        setAddedItemMessages(prevMessages => ({
          ...prevMessages,
          [item.id] : `${item.name} removed from cart`,
        }));
      } else {
        // if item is not in the cart, add it
        setCart(prevCart => [...prevCart, item]);
        setAddedItemMessages(prevMessages => ({
          ...prevMessages,
          [item.id] : `${item.name} added to cart`,
        }));
      }

      // Clear the item message after a brief delay
      setTimeout(() => {
        setAddedItemMessages(prevMessages => ({
          ...prevMessages,
          [item.id] : undefined // clear the message for the specific item
        }));
      }, 2000);
    }
  
  return (
    <Container>
      <Row>
        <Col>
          <Nav variant="tabs" className='mb-4'>
            {uniqueCategories.map(category => (
              <Nav.Item key={category}>
                <Nav.Link
                  onClick={() => handleCategoryClick(category)}
                  active={selectedCategory === category}
                >
                  {category}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>
      <Row>
        <Col className='mt-3'>
        {filteredMenuItems.map(item => (
            <div key={item.id} className="mb-3">
              <h3>{item.name}</h3>
              <p>{item.ingredients}</p>
              <p>€{item.price}</p>
              <button className='menu-btn'  onClick={() => addToCart(item)}>
                {cart.find(cartItem => cartItem.id === item.id) ? 'Remove from Cart' : 'Add to Cart'}
              </button>
              <span className="mx-4 pl-4 text-danger">{addedItemMessages[item.id]}</span>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

export default Menu