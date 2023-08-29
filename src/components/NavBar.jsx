import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'

const NavBar = ({count}) => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Products</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>

            <Container>
                <div className='cart'>
                    <Navbar.Brand >Cart
                        <sup className='cart-item'>{count}</sup>
                    </Navbar.Brand>
                </div>
            </Container>

        </Navbar>
    )
}

export default NavBar