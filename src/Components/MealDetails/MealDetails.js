import React from 'react';
import { useNavigate, useParams, } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Card, Container } from 'react-bootstrap';

const MealDetails = () => {

    let navigate = useNavigate()
    const handleBack = () => {
        navigate('/restaurant')
    }

    const { mealdb } = useParams();
    // console.log(mealdb);
    const [details, setDetails] = useState([])
    const { strInstructions, strMeal, strMealThumb } = details;
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealdb}`)
            .then(res => res.json())
            .then(data => setDetails(data.meals[0]))
    }, [])

    return (
        <Container >
            <button className='btn btn-sm btn-dark mb-2' onClick={handleBack}>Back </button>
            <Card style={{ width: '25rem' }} className=' mx-auto'>
                <Card.Img className='h-25' variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>{strInstructions}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MealDetails;