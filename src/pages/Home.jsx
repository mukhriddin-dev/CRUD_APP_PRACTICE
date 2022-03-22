import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='col-12 p-2 w-100 '>
            
            <ul className='card1 bg-light rounded  p-2 m-2 w-50 mx-auto list-unstyled d-flex justify-content-around'>
                <li> <NavLink to="/home/addproduct"> add products </NavLink> </li>
                <li> <NavLink to="/home/edit"> edit products </NavLink> </li>
            </ul>

             <Outlet/>

        </div>
    );
};

export default Home;