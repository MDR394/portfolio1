import React from 'react';

import Cards from "./Cards";
import Sdata from './Sdata';

const Work= () =>{
    return (
        <>
       <section className="d-flex align-align-items-center">
        <div className="container nav_bg">
            <div className="row text-center mt-5 mb-4">
              <h1>Our Services</h1>
            </div>
            <div class="row gy-4">
                
                {
              Sdata.map(
                (val, ind) =>{
                  return <Cards
                  key={ind}
                  img={val.imgsrc}
                  title={val.Ctitle}
                  para={val.para} />
                }
              )
            }
                </div>
            </div>
            
        
        </section>
        
        
        </>
    );
};

export default Work;