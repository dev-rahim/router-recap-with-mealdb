import React from 'react';
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown, Form, Button, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [searchFieldValue, setSearchFieldValue] = useState('')
    const handleSearch = (e) => {
        const searchField = e.target.value;
        setSearchFieldValue(searchField);
    }

    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchFieldValue])

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                                Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                onChange={handleSearch}
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

            <Container>
                <Row xs={1} lg={3} md={2} className="g-4 mt-4">
                    {

                        meals.map(meal =>
                            <Meal key={meal.idMeal} meal={meal} />
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Restaurant;