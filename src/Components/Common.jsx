import React from 'react';
import { NavLink } from 'react-router-dom';

import "animate.css";

const Common= (props) =>{
    return (
        <>
        <h1>
            <section className="d-flex align-align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div class="row">
                      <div className="col-md-6 pt-5 d-flex justify-content-center flex-column home_text order-2 order-lg-1">
                         <h1>{props.title}<br /> <strong>{props.name}</strong> </h1>
                         <p className="animate__bounceIn">{props.detail}</p>
                         <NavLink to={props.link} className="btn1 text-decoration-none">{props.btn}</NavLink>
                      </div> 
                      <div className="col-md-6 home_img order-1 order-lg-2">
                         <img src={props.img} className="pt-5 d-flex ms-auto animate__bounceIn animate__slower vert-move" alt="img" />
                      </div>  
                    </div>
                </div>
            </div>
        </div>
        </section>
        </h1>
        </>
    );
};

export default Common;