import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = (props) => {
    const { strMeal, idMeal, strMealThumb, strInstructions } = props.meal
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions.slice(0, 150)}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className='btn btn-outline-info btn-sm' to={`/meal/${idMeal}`}>Details</Link>
                    <br />
                    <Link to='/meal'>
                        <Button size="sm">Details 2</Button>
                    </Link>
                </Card.Footer>
            </Card>
        </Col>

    );
};

export default Meal;