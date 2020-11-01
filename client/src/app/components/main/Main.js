import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Main = () => {
    const history = useHistory();

    const [open, setOpen] = useState();


    const [burgersObject, setBurgersObject] = useState();

    const [totalprice, setTotalprice] = useState('0');
    const [shoppingcart, setShoppingcart] = useState([]);


    // constants
    const url = "http://www.arilybaert.com/wp-json/wp/v2/burger";
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xODguMTY2Ljg4LjE2MyIsImlhdCI6MTYwNDIyODUwMSwibmJmIjoxNjA0MjI4NTAxLCJleHAiOjE2MDQ4MzMzMDEsImRhdGEiOnsidXNlciI6eyJpZCI6IjIifX19.5M8C9kdW1squtLJFCXnL81NsxCVEzMRTbufXL45sS5g";


    let cart;

    const changeprice = () => {
        let price = 0;
        const object = Object.values(shoppingcart);
        object.map((data) => {
            const itemprice = parseFloat(data.amount) * parseFloat(data.price);
            price += itemprice
            return price;
        })
        console.log(shoppingcart);

        setTotalprice(price);

    }

    // @TODO find fix for useeffect
    useEffect(changeprice, [shoppingcart]);

    useEffect(() => {
        axios.get( 
            url,
          //   bodyParameters,
            config
          ).then((res) => {
              setBurgersObject(res.data);

          }).catch(console.log);
    },[]);

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
                name: burger.title.rendered,
                amount: 1,
                price: burger.acf.price
            }
            cart.push(burgerObj);
        }
        setShoppingcart(cart);
        localStorage.setItem('cart', JSON.stringify(cart));

        //@todo temp fix
        changeprice();
    }

    // add or remove burgers from CARTMENU
    const addBurger = (bool, id) => {
        console.log(id);
        cart = shoppingcart;
        const index = cart.findIndex(x => x.id === id);
        console.log(index);
        bool ? cart[index].amount +=1 : cart[index].amount -=1;;
        cart[index].amount < 0? cart[index].amount = 0 :
        
        // @todo temp fix
        changeprice();

    }

    // Request configuration
    const config = {
        mode: 'no-cors',
        method: 'GET',
        headers: { 
            Authorization: `Bearer ${token}`,
     },
    };
    

    

 const handeleClick = () => {
    history.push("/login");

 }

    return (
        <div className="row o-main-content">
            <div className="col-12 o-main">
                <div className="m-main">
                { open && 
                        <div className="o-layover">
                            <div className="row ">
                                <h3 className="o-cart-title">Burgers</h3>
                            </div>
                            {shoppingcart && shoppingcart.map((cartItem, index) => {
                                return <div className="row" key={index}>
                                            <div className="col-4">{cartItem.name}</div>
                                            <div className="col-4">
                                                <div>
                                                    <button onClick={() => addBurger(false, cartItem.id)}>-</button>
                                                    <span>{cartItem.amount}</span>
                                                    <button onClick={() => addBurger(true, cartItem.id)}>+</button>
                                                </div>
                                            </div>
                                            <div className="col-2">${cartItem.price}</div>

                                        </div>
                            })
                        }
                            
                        </div>
                        }
                    <div className="row">
                        <div className="col-12">
                            <ul className="m-menu-items">
                                <li>Burgers</li>
                                {/* <li>Snacks</li>
                                <li>Fries</li>
                                <li>Drinks</li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="row o-cards">

                        {
                            burgersObject && burgersObject.map((burger, index) => {
                                // console.log(burger);
                                return <div className="col-12 col-sm-6 col-md-4 o-menuItem-card" key={index}>
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
                        <div className="m-cart">
                        <button className="a-main-priceBtn" onClick={() => setOpen(!open)}>${totalprice}</button>
                        <button className="a-main-nextBtn" onClick={() => handeleClick()} >next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;