import React from 'react';
import Common from "./Common";
import MDR1 from "./img/download.jpg";


const Home= (props) =>{
    return (
        <>
       <Common 
        name="MDR Codes"
        img={MDR1} 
        detail="We are the team of talented Developers Making websites." 
        btn="Get Started"
        title="Grow Your Business With"
        link="/work" />
        </>
    );
};

export default Home;