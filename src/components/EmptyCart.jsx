import React from 'react'
import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

const EmptyCart = () => {
    return (
        <Container>
            <Card style={{ margin: '2rem 0'}} className='d-flex align-items-center text-center text-secondary'>
                <Card.Body>
                    <Card.Title style={{ fontSize: '16px' }}>No Products</Card.Title>
                    <Button className='btn btn-primary'>Shop Now</Button>
                </Card.Body>
            </Card>
        </Container>

    )
}

export default EmptyCart