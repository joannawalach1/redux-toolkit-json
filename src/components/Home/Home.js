import React, { useEffect } from 'react';
import axios from 'axios';
import CustomerListing from '../CustomerListing/CustomerListing'
import { addCustomers } from '../../features/customers/customerSlice';
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const getCustomers = async () => {
            const response = await axios.get('http://localhost:3000/customers?_page=1&_limit=3')
            .catch((err) => {
                console.log(err)
            });
            dispatch(addCustomers(response.data))
            console.log(response.data)
     };
     getCustomers()
    }, [])

    return (
        <div>
            <h2>HOME</h2>
            <CustomerListing />
        </div>
    )
}

export default Home