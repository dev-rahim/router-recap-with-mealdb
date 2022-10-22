import React from 'react';
import { Container } from 'react-bootstrap';
import pageNotFoundImg from '../../img/the-page-not-found-error-404.jpg'
const NotFound = () => {
    return (
        <Container fluid>
            <img className='img-fluid w-75' src={pageNotFoundImg} alt="" />
        </Container>
    );
};

export default NotFound;