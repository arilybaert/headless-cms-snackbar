import React, {  useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";


const Form = () => {
    const [openForm, setOpenForm] = useState(true);
    const history = useHistory();

    // Request configuration
    const url = "http://www.arilybaert.com/wp-json/wp/v2/users/register";
    const url_2 = "http://www.arilybaert.com/wp-json/jwt-auth/v1/token";
    const config = {
        mode: 'no-cors',
        method: 'POST',
        headers: { 
        },
    };

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        address: "",
        address_2: "",
        city: "",
        zip: ""
    });

    const createAccount = async () => {
        const bodyParameters = {
            "username": form.username,
            "email": form.email, 
            "password": form.password
        };

        await axios.post( 
            url,
            bodyParameters,
            config
          ).then((res) => {
            localStorage.setItem('username', res.data.user_display_name);

          }).catch((err) => {
              console.log(err.message);
              console.log('cant create account');
            });


        const bodyParameters_2 = {
            "username": form.username,
            "password": form.password
        };
        // CREATE TOKEN
        await axios.post( 
            url_2,
            bodyParameters_2,
            config
          ).then((res) => {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.user_display_name);
            // history.push("/confirmation");

          }).catch((err) => {
              console.log(err.message);
            });

        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(form);
        await createAccount();
        history.push("/confirmation");


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
                            <label htmlFor="Name">Username</label>
                            <input type="text" className="form-control" id="Username" name="username" placeholder="Chuck" value={form.username} onChange={handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Email">Email</label>
                            <input type="email" className="form-control" id="Email" name="email" placeholder="Berry" value={form.email} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label htmlFor="Password">Password</label>
                            <input type="password" className="form-control" id="Password" name="password" placeholder="secret" value={form.password} onChange={handleChange}></input>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress">Adres</label>
                            <input type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" value={form.address} onChange={handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Adres vervolg</label>
                            <input type="text" className="form-control" id="inputAddress2" name="address_2" placeholder="Apartment, studio, or floor" value={form.address_2} onChange={handleChange}></input>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Stad</label>
                            <input type="text" className="form-control" id="inputCity" name="city" placeholder="Beverly Hills" value={form.city} onChange={handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputZip">Postcode</label>
                            <input type="text" className="form-control" id="inputZip" name="zip" placeholder="90210" value={form.zip} onChange={handleChange}></input>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary a-orderBtn" onClick={() => setOpenForm(openForm)}>Bestel</button>
                    </form>
                }

                </div>
            </div>
        </div>
    )
}

export default Form;