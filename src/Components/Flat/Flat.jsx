import React from 'react';
import { Link } from 'react-router-dom';
import './Flat.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Flat = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/friends">friends</ActiveLink>
            <ActiveLink to="/posts">Posts</ActiveLink>
            <ActiveLink to="/about">About</ActiveLink>
            <ActiveLink to="/contact">Contact</ActiveLink>

        </nav>
    );
};

export default Flat;