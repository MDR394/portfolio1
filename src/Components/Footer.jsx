import React from 'react';


const Footer = () => {
    const year= new Date().getFullYear();
return(
  <>
 <footer className="position-fixed bottom-0 w-100 text-center">
     <p>Copyright By MDR Codes © {year}</p>
 </footer>
  </>
);
};

export default Footer;