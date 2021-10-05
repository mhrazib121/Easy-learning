import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" collapseOnSelect expand="lg">
            <Container>
                
                <div className="mx-5"> <img width="150" src="https://lh3.googleusercontent.com/WFDBwOT8V1hBia7tw6DnHQPnFCwc4xzrehhvm_tGZc07OX3SUXu-JWmjrORcY5l_Da4=w1024-h500" alt="" />
                 </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="navBtn" to="/home">Home</NavLink>
                        <NavLink className="navBtn" to="/service">Service</NavLink>
                        <NavLink className="navBtn" to="/category">Category</NavLink>
                        <NavLink className="navBtn" to="/aboutus">About Us</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div>
        //      <h1> this is header</h1>
        // </div>
    );
};

export default Header;