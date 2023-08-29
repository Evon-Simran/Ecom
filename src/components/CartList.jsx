import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import EmptyCart from './EmptyCart';

const CartList = ({ cart }) => {
    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity == 1) {
            alert("Quantity can't be below 1")
        } else {
            setQuantity(quantity - 1)
        }
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1)
    }
    return (
        <>
            <Container>
                {
                    cart && cart.length > 0 ?
                        cart.map((cartItem, cartIndex) => {
                            return (
                                <>
                                    <Card style={{ margin: '2rem 0' }} key={cartIndex} className='d-flex flex-row text-secondary'>
                                        <Card.Body className='d-flex flex-row align-items-center'>
                                            <div className="img" style={{ marginRight: '2rem' }}>
                                                <Card.Img variant="top" src={cartItem.image} style={{ width: '8rem', height: '10rem' }} />
                                            </div>
                                            <div className="details">
                                                <Card.Title style={{ fontSize: '16px' }}>{cartItem.title}</Card.Title>
                                                <div className="d-flex align-items-center quantity">
                                                    <Button className='btn text-primary' onClick={handleDecrement} >-</Button>
                                                    <div className='input-group-text' style={{ margin: '0 0.2rem' }}>{quantity}</div>
                                                    <Button className='btn text-primary' onClick={handleIncrement}>+</Button>
                                                </div>
                                                <Card.Text style={{ fontSize: '14px' }}>
                                                    ₹ {cartItem.price}
                                                </Card.Text>
                                            </div>
                                        </Card.Body>
                                        <Card.Body className='d-flex flex-row align-items-center'>
                                           <Button className='btn btn-primary'>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </>
                            )
                        })
                        :
                        <EmptyCart />
                }

                <Card style={{ margin: '2rem 0' }} className='d-flex flex-row text-secondary'>

                    <Card.Body className='d-flex flex-row align-items-center'>
                        <Card.Text>
                            Total : ₹
                            {
                                cart.map(item => item.price * quantity).reduce((total, value) => total + value, 0)
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default CartList