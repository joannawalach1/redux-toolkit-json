import React from 'react';
import { useSelector } from "react-redux";
import { addCustomers} from '../../features/customers/customerSlice'
import CustomerCard from '../CustomerCard/CustomerCard';


const CustomerListing = () => {
    const customers = useSelector(addCustomers);
    console.log(customers.payload)
    let renderCustomers = "";
    renderCustomers = (customers.payload === "True") ? (customers.payload.map((customer, index) => {
            <CustomerCard key={index} data={customer} />
        })) : (<div className="error"><h3>Error</h3></div>);
    return (
        <div>
            <h2>{renderCustomers}</h2>
        </div>
    )
}

export default CustomerListing;