import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav bg-dark py-2 d-flex justify-content-center'>
            <Link className='btn btn-outline-light me-2' to='/'>Home</Link>
            <Link className='btn btn-outline-light me-2' to='/restaurant'>Restaurant</Link>
        </div>
    );
};

export default Header;