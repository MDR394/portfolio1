import React from 'react';
import Common from "./Common";
import MDR1 from "./img/MDR1.jpeg";
const About= () =>{
    return (
        <>
        <Common 
        name="Muhammad Dawood Rafique"
        img={MDR1} 
        detail="Hello there! Before talking about qualifications and professional abilities, I would like to introduce myself. I am Muhammad Dawood Rafique and I am from Pakistan. Taking web development as a profession not only fulfils my pocket but also my heart because it has been my passion since my early teenage.

I believe that people should do things in which they are good at or in which their heart lays. That’s why I chose freelance web development as my career because I believe I’m good at this and mas I am always honest and I am never afraid of doing hard work." 
        btn="Contact Us"
        title="Its Me"
        link="/contact" />
        </>
    );
};

export default About;