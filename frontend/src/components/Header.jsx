import React from 'react';
import { Badge, Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-transparent2.png';
import {useSelector} from 'react-redux';

const Header = () => {
  const {cartItems} = useSelector((state) => state.cart);
  console.log(cartItems);

  // const cart = useSelector((state) => state.cart || {}); // Ensure cart exists
  // const cartItems = cart.cartItems || []; // Default to empty array

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img src={logo} alt="ShopExpress" width="40" height="40" className="d-inline-block align-top" />{' '}
              ShopExpress
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {
                    cartItems.length > 0 && (
                        <Badge pill bg = 'success' style={{marginLeft: '5px'}}>
                          {cartItems.reduce((a, c) => a+c.qty, 0)}
                        </Badge>
                    )
                  }
                </Nav.Link>
              </Link>

              <Link to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
