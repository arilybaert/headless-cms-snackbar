import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from "react-router-dom";

const Login = () => {
    const [openForm, setOpenForm] = useState(true);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const history = useHistory();

    const url = "http://www.arilybaert.com/wp-json/jwt-auth/v1/token";
    // Request configuration
    const config = {
        mode: 'no-cors',
        method: 'POST',
        headers: { 
        },
    };
    


    useEffect(() => {
        console.log(form);
    },[form])

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const bodyParameters = {
            "username": form.email,
            "password": form.password
        };
        axios.post( 
            url,
            bodyParameters,
            config
          ).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.user_display_name);
            history.push("/confirmation");

          }).catch((err) => {
              console.log(err);
              console.log('email or pass incorrect');
            });
    }
    const handleChange = (event) => {
        const value = event.target.value;
        setForm({
          ...form,
          [event.target.name]: value
        });
    }
    return (
        <div className="row o-main-content">
            <div className="col-12 o-main">
                <div className="m-main m-confirmation">

                {openForm && 
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="Email">Email</label>
                            <input type="text" className="form-control" id="Email" name="email" placeholder="fre@cms.be" value={form.email} onChange={handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Password">Password</label>
                            <input type="password" className="form-control" id="Password" name="password" placeholder="maga2020" value={form.password} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <Link to="/form" >No account? Make one here!</Link>
                        </div>

                    </div>
                    
                    <button type="submit" className="btn btn-primary a-orderBtn" onClick={() => setOpenForm(openForm)}>Bestel</button>
                    </form>
                }

                {
                    !openForm && 
                    <p className="a-order-confirmation">Thanks for ordering! <br/>This is your order ID: snackbar123</p>
                }
                </div>
            </div>
        </div>
    )
}

export default Login;