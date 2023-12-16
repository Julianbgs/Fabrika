import React from "react";

import main from '../../../assets/images/about-us/main.png';
import grid1 from '../../../assets/images/about-us/grid1.png';
import grid2 from '../../../assets/images/about-us/grid2.png';
import grid3 from '../../../assets/images/about-us/grid3.png';
import grid4 from '../../../assets/images/about-us/grid4.png';
import grid5 from '../../../assets/images/about-us/grid5.png';
import grid6 from '../../../assets/images/about-us/grid6.png';
import grid7 from '../../../assets/images/about-us/grid7.png';

import './About-us.scss';

export default function AboutUs() {
    return (
        <section className="about">
            <div className="about-main">
                <div className="about-main__descr">
                    <h3 className="about-main__title">О нас</h3>
                    <div className="about-main__sub-title">Давайте познакомимся поближе!</div>
                    <div className="about-main__descr">
                        Сеть кафе «ФАБРИКА» работает уже более трех лет и не перестает радовать вас приятными ценами и
                        качественным сервисом.
                        Мы работаем в формате true cost, <br/>что в переводе с английского означает «честная цена».

                    </div>
                </div>
                <div className="about-main__image">
                    <img src={main} alt="main img"/>
                </div>
            </div>
            <div className="price">
                <h3 className="price__title">У нас также установлена плата за вход:</h3>
                <p className="price__border-description">До 16:00
                    <span className="price__thin">– 100 рублей с человека</span>
                </p>
                <p className="price__border-description">После 16:00
                    <span className="price__thin"> – 300 рублей с человека</span>
                </p>
                <p className="price__border-description small-about">Детям до 7 лет вход бесплатный </p>
            </div>
            <div className="difference">
                <h3 className="difference__title">Из особенностей нашей сети:</h3>
                <div className="difference__flex">
                    <div className="difference__first">
                        <div className="difference__address">КАФЕ ПО АДРЕСУ</div>
                        <div className="difference__cafe">Первомайская 39</div>
                        <div className="difference__achieve">Банкетный зал «Барбарис»</div>
                        <div className="difference__achieve-descr">Общей вместимостью до 80 человек</div>
                        <div className="difference__achieve">VIP-комната</div>
                        <div className="difference__achieve-descr">Общей вместимостью до 10 человек</div>

                    </div>
                    <div className="difference__second">
                        <div className="difference__address">КАФЕ ПО АДРЕСУ</div>
                        <div className="difference__cafe">Кордонный 1и</div>
                        <div className="difference__achieve">Вместимость до 65 человек</div>
                        <div className="difference__achieve-descr">Без учета летней веранды</div>
                        <div className="difference__achieve">Первая береговая линия</div>
                        <div className="difference__achieve-descr">В шаговой доступности к морю</div>
                    </div>
                </div>
            </div>
            {/*<div className="grid">*/}
            {/*    <div className="elem elem1">*/}
            {/*        <img src={grid1} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*    <div className="elem elem2">*/}
            {/*        <img src={grid2} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*    <div className="elem elem3">*/}
            {/*        <img src={grid3} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*    <div className="elem elem4">*/}
            {/*        <img src={grid4} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*    <div className="elem elem5">*/}
            {/*        <img src={grid5} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*    <div className="elem elem6">*/}
            {/*        <img src={grid6} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*    <div className="elem elem7">*/}
            {/*        <img src={grid7} alt="grid image"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="container-grid">
                <figure>
                    <img src={grid1} alt="grid image"/>
                </figure>
                <figure>
                    <img src={grid3} alt="grid image"/>
                </figure>
                <figure>
                    <img src={grid2} alt="grid image"/>
                </figure>
                <figure>
                    <img src={grid4} alt="grid image"/>
                </figure>
                <figure>
                    <img src={grid5} alt="grid image"/>
                </figure>
                <figure>
                    <img src={grid6} alt="grid image"/>
                </figure>
                <figure>
                    <img src={grid7} alt="grid image"/>
                </figure>
            </div>
        </section>
    )
}