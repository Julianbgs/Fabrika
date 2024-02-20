import React from "react";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import StyledLink from "../../StyledComponents/Link/Link";

import './Footer.scss';

import logo from '../../../assets/images/footer/logo.svg';
import tg from '../../../assets/images/footer/tg.svg';
import vk from '../../../assets/images/footer/vk.svg';
import whatsApp from '../../../assets/images/footer/wapp.svg';
import {useMediaQuery} from "react-responsive";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import {useSelector} from "react-redux";

export default function Footer() {
    const initial: InitialStoreInterface = useSelector((state: any) => state);
    const address = initial ? initial.address : null;

    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });
    return (
        <footer className="footer">
            {isMobile && <div className="flex">
                <StyledLink to={'/contacts'}>
                    <button className="footer__btn">
                        Контакты
                    </button>
                </StyledLink>
                <StyledLink to={'/'}>
                    <button className="footer__btn white">
                        Меню
                    </button>
                </StyledLink>
                <StyledLink to={'/basket'}>
                    <button className="footer__btn mr-0">
                        Корзина
                    </button>
                </StyledLink>

            </div>}
            {isDesktop && <div className="container">
                <div className="footer__flex">
                    <div className="footer__assets">
                        <div className="footer__logo">
                            <StyledLink to={'/'}>
                                <img src={logo} alt="footer logo"/>
                            </StyledLink>
                        </div>
                        {/*<div className="footer__social">*/}
                        {/*    <div className="footer__icon">*/}
                        {/*        <img src={tg} alt="telegram icon"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="footer__icon">*/}
                        {/*        <img src={whatsApp} alt="whatsApp icon"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="footer__icon">*/}
                        {/*        <img src={vk} alt="vk icon"/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <ul className="footer__menu">
                        <li className="footer__elem">
                            <StyledLink to={'/'}>
                                <HeaderItem title={'Меню'}/>
                            </StyledLink>
                        </li>
                        <li className="footer__elem">
                            <StyledLink to={'/about-us'}>
                                <HeaderItem title={'О нас'}/>
                            </StyledLink>
                        </li>
                        <li className="footer__elem">
                            <StyledLink to={'/contacts'}>
                                <HeaderItem title={'Контакты'}/>
                            </StyledLink>
                        </li>
                    </ul>

                    <div className="footer__contacts">
                        {address === 'Первомайская 39' && <iframe className="footer__rating" src="https://yandex.ru/sprav/widget/rating-badge/2303086933?type=rating" width="150"
                                height="50" frameBorder="0"></iframe>}
                        {address === 'Кордонный переулок 1И' &&
                            <iframe className="footer__rating" src="https://yandex.ru/sprav/widget/rating-badge/139072557633?type=rating"
                                    width="150" height="50" frameBorder="0"></iframe>
                        }
                        <div className="footer__contact">
                            <div className="footer__title">
                                Первомайская 39
                            </div>
                            <div>
                                <a className="footer__number" href="tel:+7928841171">
                                    8 (928) 841-11-71
                                </a>
                            </div>
                        </div>
                        <div className="footer__contact">
                            <div className="footer__title">
                                Переулок Кордонный 1И
                            </div>
                            <div>
                                <a className="footer__number" href="tel:+79385577030">
                                    8 (938) 557-70-30
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </footer>
    )
}