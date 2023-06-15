import React from 'react';
import "./Sdata.css";

const Sdata = (props) => {
    const {name , population , flags} = props.country;
    return (
        <div className='data'>
            <h1>country : {name.common} </h1>
            <p>population : {population} </p>
            <img src= {flags.png} alt="" />
        </div>
    );
};

export default Sdata;