import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';
import EmptyCart from './EmptyCart';

const CartList = ({ cart }) => {
    const [CART, setCART] = useState([]);

    useEffect(() => {
        setCART(cart)
    }, [cart])

    const decrement = (event) => {
        alert("Hello")
    }
    return (
        <>
            <Container>
                {
                    CART && CART.length > 0 ?
                        CART.map((cartItem, cartIndex) => {
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
                                                    <Button className='btn text-primary' id='decrement' onClick={() => {
                                                        const _CART = CART.map((item, index) => {
                                                            if (item.quantity > 1) {
                                                                return cartIndex === index ? { ...item, quantity: item.quantity - 1 } : item
                                                            } else (item.quantity == 1)
                                                            {
                                                                return cartIndex == 1 ? { ...item, quantity: 1 } : item
                                                            }
                                                        })
                                                        setCART(_CART)
                                                    }}>-</Button>
                                                    <div className='input-group-text' style={{ margin: '0 0.2rem' }}>{cartItem.quantity}</div>
                                                    <Button className='btn text-primary' onClick={() => {
                                                        const _CART = CART.map((item, index) => {
                                                            return cartIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                                                        })
                                                        setCART(_CART)
                                                    }}>+</Button>
                                                </div>
                                                <Card.Text style={{ fontSize: '14px' }}>
                                                    ₹ {parseFloat(cartItem.price * cartItem.quantity).toFixed(2)}
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
                                CART.map(item => item.price * item.quantity).reduce((total, value) => parseFloat(total + value).toFixed(2), 0)
                            }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default CartList