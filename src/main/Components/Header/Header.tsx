import React from "react";
import {Link} from "react-router-dom";
import HeaderItem from "../../UI-elements/HeadeItem/HeaderItem";
import './Header.css';
import StyledLink from "../../StyledComponents/Link/Link";

export default function Header () {
    return (
        <div className="header">
            <nav>
                <div>Select address</div>
                <ul className="header__menu">
                    <li className="header__elem">
                        <StyledLink to={'/'} >
                            <HeaderItem title={'Доставка и оплата'} />
                        </StyledLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}