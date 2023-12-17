import React from "react";
import {Link} from "react-router-dom";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import './Header.scss';
import StyledLink from "../../StyledComponents/Link/Link";
import Select from "../../UI-elements/Select/Select";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

import Logo from '../../../assets/images/header/Logo.svg';
import Cart from '../../../assets/images/header/cart.svg';

export default function Header() {
    const options = [
        {title: 'Анапа', address: 'Первомайская 39'},
        {title: 'Анапа', address: 'Кордонный переулок 1И'}
    ]
    return (
        <div className="container">
            <div className="header">
                <nav className="header__nav">
                    <div className="header__box">
                        <Select options={options}/>
                        <ul className="header__menu">
                            <li className="header__elem">
                                <StyledLink to={'/'}>
                                    <HeaderItem title={'Меню'}/>
                                </StyledLink>
                            </li>
                        </ul>
                    </div>
                    <div className="header__logo">
                        <img src={Logo} alt="Logo site"/>
                    </div>
                    <div className="header__box">
                        <ul className="header__menu">
                            <li className="header__elem">
                                <StyledLink to={'/about-us'}>
                                    <HeaderItem title={'О нас'}/>
                                </StyledLink>
                                <StyledLink to={'/contacts'}>
                                    <HeaderItem isLastItem={true} title={'Контакты'}/>
                                </StyledLink>
                            </li>
                        </ul>
                        <div className='header__cart'>
                            <img src={Cart} alt="cart site"/>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}