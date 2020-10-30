import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const Main = () => {

    const [open, setOpen] = useState();

    const [burgers, setBurgers] = useState(0);
    const [burgersObject, setBurgersObject] = useState();
    const [burgerprice, setBurgerprice] = useState();
    const [totalprice, setTotalprice] = useState(0);
    const [shoppingcart, setShoppingcart] = useState([]);


    // constants
    const url = "http://www.arilybaert.com/wp-json/wp/v2/burger";
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xODguMTY2Ljg4LjE2MyIsImlhdCI6MTYwMzkwMTY0MywibmJmIjoxNjAzOTAxNjQzLCJleHAiOjE2MDQ1MDY0NDMsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.MNz5bmZgxkF0SuKhOEZne4utIzcAdcORw8MH53Y1iTQ";


    let cart;

    const changeprice = () => {
        // let price;
        // const object = Object.values(shoppingcart);
        // const result = object.map((data) => {
        //     price += data.amount * data.price;
        //     return price;
        // })
        console.log('hey')
        console.log(shoppingcart);

        // setTotalprice(result);
    }


    useEffect(changeprice, [shoppingcart]);

    // add cart items
    const addToCart = (burger) => {

        cart = shoppingcart;
        const index = cart.findIndex(x => x.id ===burger.id);

        // create OR add new cart item
        if(index >= 0) {
            cart[index].amount +=1;
        } else {
            const burgerObj = {
                id: burger.id,
                amount: 1,
                price: burger.acf.price
            }
            cart.push(burgerObj);
        }
        setShoppingcart(cart);
        console.log(shoppingcart);
    }

    // add or remove burgers from CARTMENU
    const addBurger = (bool) => {
        let burgerAmnt = burgers;
        let totalpriceAmnt = totalprice;
        bool? burgerAmnt++ : burgerAmnt--;
        burgerAmnt < 0? burgerAmnt = 0 :

        totalpriceAmnt = burgerprice * burgerAmnt;
        setTotalprice(totalpriceAmnt);
        setBurgers(burgerAmnt);
    }

    // Request configuration
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    // const bodyParameters = {
    //    key: "value"
    // };
    


    useEffect(() => {
        axios.get( 
            url,
          //   bodyParameters,
            config
          ).then((res) => {
              setBurgersObject(res.data);
            //   console.log(res.data[0]);

          }).catch(console.log);
    },[]);
    return (
        <div className="row o-main-content">
            <div className="col-12 o-main">
                <div className="m-main">
                { open && 
                        <div className="o-layover">
                            <div classname="row ">
                                <h3 className="o-cart-title">Burgers</h3>
                            </div>
                            <div className="row">
                                <div className="col-4">Double XL</div>
                                <div className="col-4">
                                    <div>
                                        <button onClick={() => addBurger(false)}>-</button>
                                        <span>{burgers}</span>
                                        <button onClick={() => addBurger(true)}>+</button>
                                    </div>
                                </div>
                                <div className="col-2">$4.5</div>
                                <div className="col-2">
                                    <button>Remove</button>
                                </div>
                            </div>
                        </div>
                        }
                    <div className="row">
                        <div className="col-12">
                            <ul className="m-menu-items">
                                <li>Burger</li>
                                <li>Snacks</li>
                                <li>Fries</li>
                                <li>Drinks</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row o-cards">

                        {
                            burgersObject && burgersObject.map((burger, index) => {
                                // console.log(burger);
                                return <div className="col-4 o-menuItem-card" key={index}>
                                            <div className="m-menuItem-card">
                                                <img src={burger.acf.image.url} alt="burger" title="menu item" className="a-menuItem-picture"/>
                                                <div className="m-menuItem-price">
                                                    <span className="a-menuItem-price">${burger.acf.price}</span></div>
                                                <h3 className="a-menuItem-title">{burger.title.rendered} <br/>XL</h3>
                                                <button href="/" className="a-menuItem-action" onClick={() => addToCart(burger)}>BUY</button>
                                            </div>
                                        </div>
                            })
                        }

                    </div>
                    <div className="o-cart">
                        <button onClick={() => setOpen(!open)}>${totalprice}</button>
                        <Link to="/form" href="form" >next</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;