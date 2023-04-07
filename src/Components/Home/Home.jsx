import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Flat from '../Flat/Flat';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
                         

            <Flat></Flat>
<div>{  navigation.state === 'loading' ? 'loading...' : ''}</div>

            <i>this is Home page</i>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;