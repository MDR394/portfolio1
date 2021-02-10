import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards= (props) =>{
    return (
        <>
        
        <div className="col-md-4 col-10 mx-auto">
       
    <div className="card">
  <img src={props.img} className="card-img-top" alt="img" />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.para}</p>
    <NavLink to="" className="btn btn-primary">Visit Site</NavLink>
  </div>
</div>
</div>         

        
        </>
    );
};

export default Cards;