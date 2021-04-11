import React from 'react';

import { Form, Button } from 'react-bootstrap';
import "./Login.css";


const LoginCpn = () => {
  return (
   
    <section id="cover" className="min-vh-100">
    <div id="cover-caption">
        <div className="container">
            <div className="row text-white">
                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h1 className="display-4 py-2 text-truncate">Welcome...</h1>
                    <div className="px-2">

                        <form action="" className="justify-content-center">
                            <div className="form-group">
                                <label className="sr-only">Name</label>
                                <input type="text" className="form-control" placeholder="Asma Haouas"/>
                            </div>
                            <div className="form-group">
                                <label className="sr-only">Email</label>
                                <input type="text" className="form-control" placeholder="Asma.hs@example.com"/>
                            </div>
                           
                            <button type="submit" className="btn btn-info btn-sm">submit</button>
                          
                        </form>


                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
};

export default LoginCpn;