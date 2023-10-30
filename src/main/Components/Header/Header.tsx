import React from "react";
import {Link} from "react-router-dom";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import './Header.css';
import StyledLink from "../../StyledComponents/Link/Link";
import Select from "../../UI-elements/Select/Select";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

export default function Header () {
    const options = [
        {title: 'Анапа', address: 'Ленина 10'},
        {title: 'Анапа', address: 'Кордонный переулок 12'}
    ]
    return (
        <div className="header">
            <nav className="header__nav">
                <div className="header__box">
                <Select options={options}/>
                <ul className="header__menu">
                    <li className="header__elem">
                        <StyledLink to={'/'} >
                            <HeaderItem title={'Доставка и оплата'} />
                        </StyledLink>
                    </li>
                </ul>
                </div>
                <div className="header__logo">
                    <span>LOGO</span>
                </div>
                <div className="header__box header__box--invert">
                <div className="header__elem">
                    <StyledLink to={'/'} >
                        <HeaderItem title={'Контакты'} />
                    </StyledLink>
                </div>
                <div>Корзина</div>
                </div>
            </nav>
            <NavigationMenu />
        </div>
    )
}