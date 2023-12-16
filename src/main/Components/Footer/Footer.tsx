import React from "react";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import StyledLink from "../../StyledComponents/Link/Link";

import './Footer.scss';

import logo from '../../../assets/images/footer/logo.svg';
import tg from '../../../assets/images/footer/tg.svg';
import vk from '../../../assets/images/footer/vk.svg';
import whatsApp from '../../../assets/images/footer/wapp.svg';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__flex">
                    <div className="footer__assets">
                        <div className="footer__logo">
                            <img src={logo} alt="footer logo"/>
                        </div>
                        <div className="footer__social">
                            <div className="footer__icon">
                                <img src={tg} alt="telegram icon"/>
                            </div>
                            <div className="footer__icon">
                                <img src={whatsApp} alt="whatsApp icon"/>
                            </div>
                            <div className="footer__icon">
                                <img src={vk} alt="vk icon"/>
                            </div>
                        </div>
                    </div>
                    <ul className="footer__menu">
                        <li className="footer__elem">
                            <StyledLink to={'/'}>
                                <HeaderItem title={'Меню'}/>
                            </StyledLink>
                        </li>
                        <li className="footer__elem">
                            <StyledLink to={'/'}>
                                <HeaderItem title={'О нас'}/>
                            </StyledLink>
                        </li>
                        <li className="footer__elem">
                            <StyledLink to={'/'}>
                                <HeaderItem title={'Контакты'}/>
                            </StyledLink>
                        </li>
                    </ul>
                    <div className="footer__contacts">
                        <div className="footer__contact">
                            <div className="footer__title">
                                Первомайская 39
                            </div>
                            <div className="footer__number">
                                8 (928) 841-11-71
                            </div>
                        </div>
                        <div className="footer__contact">
                            <div className="footer__title">
                                Переулок Кордонный 1И
                            </div>
                            <div className="footer__number">
                                8 (938) 557-70-30
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}