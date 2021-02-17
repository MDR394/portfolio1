import React from 'react';
import Common from "./Common";
import MDR1 from "./img/2.jpg";


const Home= (props) =>{
    return (
        <>
       <Common 
        name="MDR Codes"
        img={MDR1} 
        detail="You Can Hair Us As Your Web Developer" 
        btn="Get Started"
        title="Grow Your Business With"
        link="/work" />
        </>
    );
};

export default Home;