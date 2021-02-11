import React from 'react';

const Contact= () =>{
    return (
        <>
        <section className="d-flex align-align-items-center">
        <div className="container nav_bg">
            <div className="row text-center mt-5 mb-4">
              <h1>Contact Us</h1>
            </div>
            
            <div class="row">
                <div className="col-md-6 mx-auto">
                <div class="mb-3">

                
  <label for="formGroupExampleInput" class="form-label">Name</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Name" />
</div>
<div class="mb-3">
  <label for="formGroupExampleInput2" class="form-label">WhatApp No</label>
  <input type="number" class="form-control" id="formGroupExampleInput2" placeholder="WhatApp No" />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message Here</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Text Here"></textarea>
</div>
                    <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                </div>
            </div>
            </div>
        
        </section>
        </>
    );
};

export default Contact;
