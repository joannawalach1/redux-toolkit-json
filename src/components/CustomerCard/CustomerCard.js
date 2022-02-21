import React from 'react';

const CustomerCard = (props) => {
    const {data} = props;
  return (
    <div>
        <h2>Card</h2>
        <div>{data.id}</div>
        <div>{data.name}</div>
        <div>{data.surname}</div>
        <div>{data.dateOfRegistration}</div>
        <div>{data.endOfSubscription}</div>
    </div>
  )
}

export default CustomerCard