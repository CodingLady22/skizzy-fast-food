import { Container, Row, Col, Nav } from 'react-bootstrap';

function CartPage() {
  return (
    <Container>
        <Row>
            <Col>
                
                <h4>Cart</h4>
                {cart.map(cartItem => (
                    <div key={cartItem.id}>
                    <p>{cartItem.name} - ${cartItem.price}</p>
                </div>
                ))}
            </Col>
        </Row>
    </Container>
  )
}

export default CartPage