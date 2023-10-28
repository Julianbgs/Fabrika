import React from "react";
import {Link} from "react-router-dom";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import './Header.css';
import StyledLink from "../../StyledComponents/Link/Link";
import Select from "../../UI-elements/Select/Select";

export default function Header () {
    return (
        <div className="header">
            <nav>
                <Select title="Анапа" address="Кордоный переулок 12" options={[]}/>
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