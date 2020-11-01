import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import nextId from "react-id-generator";
import {Link} from "react-router-dom";


const Confirmation = () => {
    const [openForm, setOpenForm] = useState(true);
    const [timeOptions, setTimeOptions] = useState();
    const [form, setForm] = useState({
        time: "",
    });
    const url = "http://www.arilybaert.com/wp-json/wp/v2/purchase";
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xODguMTY2Ljg4LjE2MyIsImlhdCI6MTYwNDIzNDE2MywibmJmIjoxNjA0MjM0MTYzLCJleHAiOjE2MDQ4Mzg5NjMsImRhdGEiOnsidXNlciI6eyJpZCI6IjEifX19.bNjZQ6L8Iu1x_HjolUuREEGzIbFcrthVjWQW3b_2_ic";
    const ordeId = nextId();

    // Request configuration
    const config = {
        mode: 'no-cors',
        method: 'POST',
        headers: { 
            Authorization: `Bearer ${token}`,

        },
    };
    useEffect(() => {
        console.log(form);
    },[form]);

    useEffect(() => {
        let timeframes = [];

        var newTime = new Date();
        let time = newTime.getHours();
        let minutes = newTime.getMinutes();
        while(time < 20) {
            time += 1;
            minutes += 10;
            if(minutes > 60) {
                minutes -= 60;
            }
            timeframes.push(`${time}:${minutes<10?'0':''}${minutes}`)
    
        }
        setTimeOptions(timeframes);
    },[]);

    const handlePurchase = () => {
        // get content from local storage and mold it into an array for request
        let content = [];
        const localContent = JSON.parse(localStorage.getItem('cart'));
        localContent.map((data) => {
            content.push(data.id);
            return 'test';
        })

        const bodyParameters = {
            "title": `Bestelling: ${ordeId}`,
            "content": "",
            "fields": {
                "adress": "Vleugstraat 12",
                "delivery_time": form.time,
                "content": content
                },
                "status": "publish"
        };

        axios.post( url, bodyParameters, config)
            .then((res) => {
              console.log(res);
            if(res.statusText==="Created") {
                setOpenForm(!openForm);
            }

          }).catch((err) => {
              console.log(err);
              console.log('email or pass incorrect');
            });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handlePurchase();
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

                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">When would you like to pick your order up?</label>
                            <select className="form-control" id="time" value={form.time} name="time" onChange={handleChange}>
                            {timeOptions && timeOptions.map((data, index) => {
                                return <option key={index} value={data}>{data}</option>
                            })}
                            </select>
                        </div>
                    </div>
                    

                    <button type="submit" className="btn btn-primary a-orderBtn" onClick={() => setOpenForm(openForm)}>Bestel</button>
                    </form>
                }

                {
                    !openForm && 
                    <div>
                        <p className="a-order-confirmation">Thanks for ordering! <br/>This is your order ID: {ordeId}<br/> Your order will be ready at {form.time}</p>
                        <Link to="/">go home</Link>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Confirmation;