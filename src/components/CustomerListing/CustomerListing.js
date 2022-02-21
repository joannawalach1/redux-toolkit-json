import React from 'react';
import { useSelector } from "react-redux";
import { addCustomers} from '../../features/customers/customerSlice'
import CustomerCard from '../CustomerCard/CustomerCard';


const CustomerListing = (props) => {
    const customers = useSelector(addCustomers);
    console.log(customers.payload)
    let renderCustomers = "";
    renderCustomers = 
    (customers.Response === "True") ? 
    (customers.customers.map((customer, index) => {
    <CustomerCard key={index} data={customer} />
    })) : (<div className="error"><h3>Error</h3></div>);
    return (
        <div>
            {renderCustomers}
        </div>
    )
}

export default CustomerListing;