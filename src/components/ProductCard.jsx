import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

const ProductCard = ({ products , addToCart }) => {
    return (
        <>
        
            <Container className='d-flex flex-wrap justify-content-between '>
                {
                    products && products.length > 0 ?
                        products.map((productItem, productIndex) => {
                            return (
                                <Card style={{ width: '18rem', marginBottom: '2rem', paddingTop: '2rem' }} key={productIndex} className='d-flex align-items-center text-center text-secondary'>
                                    <Card.Img variant="top" src={productItem.image} style={{ width: '8rem', height: '10rem' }} />
                                    <Card.Body>
                                        <Card.Title style={{ fontSize: '16px' }}>{productItem.title}</Card.Title>
                                        <Card.Text>
                                            {productItem.description}
                                        </Card.Text>
                                        <Card.Text style={{ fontSize: '14px' }}>
                                            ₹ {productItem.price}
                                        </Card.Text>
                                        <Button className='btn btn-primary' onClick={() => {addToCart(productItem)}}>Add To Cart</Button>
                                    </Card.Body>
                                </Card>
                            )
                        })
                        :
                        'Loading...'
                }
            </Container>

        </>
    )
}

export default ProductCard