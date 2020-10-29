import React from 'react';

const Header = () => {

    return (
        <div className="row o-header">
            <div className="a-site-title col-2">Snackbar</div>
            <div className="offset-6 col-4">
                <ul className="m-menu-links">
                    <li>Contact</li>
                    <li>Over ons</li>
                    <li className="a-menu-action">Bestel nu</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;