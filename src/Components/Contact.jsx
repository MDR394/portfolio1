import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_wYVrnsW5tCEYt2uMLbgId");
const Contact= () =>{

  function sendMail(e) {
    e.preventDefault();

    emailjs.sendForm('service_vrtummh', 'template_schk42s', e.target, 'user_wYVrnsW5tCEYt2uMLbgId')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

    return (
        <>
        <section className="d-flex align-align-items-center">
        <div className="container nav_bg">
            <div className="row text-center mt-3 mb-3">
              <h1>Contact Us</h1>
            </div>
            
            <div class="row">
                <div className="col-md-6 mx-auto">
                <form onSubmit={sendMail} name="form_name">
                <div class="mb-3">
   
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" name="name" />
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">WhatApp No</label>
  <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="WhatApp No" name="no" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message Here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text Here" name="message"></textarea>
</div>

<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>  


                </div>
            </div>
            </div>
        
        </section>
        </>
    );
};

export default Contact;
