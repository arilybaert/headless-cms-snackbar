import React, {  useState } from 'react';

const Form = () => {
    const [openForm, setOpenForm] = useState(true);
    const [openConfirmation, setopenConfirmation] = useState(false)


    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        address: "",
        address_2: "",
        city: "",
        zip: ""
    });

    const handleSubmit = (event) => {
        event.preventDefault();
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
                            <label htmlFor="Name">Voornaam</label>
                            <input type="text" className="form-control" id="Name" name="firstname" placeholder="Chuck" value={form.firstname} onChange={handleChange}></input>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="Lastname">Achternaam</label>
                            <input type="text" className="form-control" id="Lastname" name="lastname" placeholder="Berry" value={form.lastname} onChange={handleChange}></input>
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

                    <button type="submit" className="btn btn-primary a-orderBtn" onClick={() => setOpenForm(!openForm)}>Bestel</button>
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

export default Form;