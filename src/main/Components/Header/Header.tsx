import React from "react";
import {Link} from "react-router-dom";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import './Header.scss';
import StyledLink from "../../StyledComponents/Link/Link";
import Select from "../../UI-elements/Select/Select";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

import Logo from '../../../assets/images/header/Logo.svg';
import Cart from '../../../assets/images/header/cart.svg';
import {useMediaQuery} from "react-responsive";

export default function Header() {
    const options = [
        {title: 'Анапа', address: 'Кордонный переулок 1И'},
        {title: 'Анапа', address: 'Первомайская 39'},
    ]
    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });
    return (
        <div className="container">
            <div className="header">
                <nav className="header__nav">
                    {isDesktop && <div className="header__box">
                        <Select options={options}/>
                        <ul className="header__menu">
                            <li className="header__elem">
                                <StyledLink to={'/'}>
                                    <HeaderItem title={'Меню'}/>
                                </StyledLink>
                            </li>
                        </ul>
                    </div> }
                    <div className="header__logo">
                        <img src={Logo} alt="Logo site"/>
                    </div>
                    {isMobile && <Select options={options}/>}
                    {isDesktop && <div className="header__box">
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
                    </div>}
                </nav>
            </div>
        </div>
    )
}