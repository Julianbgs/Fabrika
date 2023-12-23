import React from "react";

import map from '../../../assets/images/contacts/map.png';
import mapDelivery from '../../../assets/images/contacts/map-delivery.png';

import './Contacts.scss';
import {useMediaQuery} from "react-responsive";

export default function Contacts() {
    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });
    return (
        <section className="contacts">
            <div className="contacts__main">
                <div className="contacts__title">Контакты</div>
                <div className="contacts__box">
                    <div className="contacts__item">
                        <div className="contacts__box-title">
                            Бронь столов, доставка с Первомайской 39
                        </div>
                        <div className="contacts__box-number">
                            8 (928) 841-11-71
                        </div>
                    </div>
                    <div className="contacts__item">
                        <div className="contacts__box-title">
                            Бронь столов, доставка переулка с Кордонного 1И
                        </div>
                        <div className="contacts__box-number">
                            8 (938) 557-70-30
                        </div>
                    </div>
                </div>
                <div className="contacts__box contacts__box--center">
                    <div className="contacts__item">
                        <div className="contacts__box-title">
                            По брони банкетного зала и организации мероприятия:
                        </div>
                        <div className="contacts__box-number">
                            8 (918) 640-02-50
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts__maps">
                <div className="contacts__map">
                    <div className="contacts__image">
                        <img src={map} alt="image map"/>
                    </div>
                    <div className="contacts__map-boxes">
                        <div className="contacts__map-box">
                            <div className="contacts__map-box-title">г. Анапа, ул. Первомайская 39</div>
                            <div className="contacts__map-box-descr">График работы:</div>
                            <div className="contacts__map-box-descr">Пн-чт с 10:00 до 00:00</div>
                            <div className="contacts__map-box-descr">Пт-вс с 10:00 до 02:00:</div>
                        </div>
                        <div className="contacts__map-box">
                            <div className="contacts__map-box-title">г. Анапа, переулок Кордонный 1И</div>
                            <div className="contacts__map-box-descr">График работы:</div>
                            <div className="contacts__map-box-descr">Пн-чт с 10:00 до 00:00</div>
                            <div className="contacts__map-box-descr">Пт-вс с 10:00 до 02:00:</div>
                        </div>
                    </div>
                </div>
                <div className="contacts__map">
                    {isMobile && <div className="contacts__image-delivery">
                        <img src={mapDelivery} alt="image map"/>
                    </div>}
                    <div className="contacts__map-boxes left">
                        <h3 className="contacts__title-delivery">Доставка!</h3>
                        <p className="contacts__sub-title">«Фабрика» рада, что вы выбираете нашу доставку!</p>
                        <p className="contacts__description">Хотим сразу рассказать о тарифах по доставке, так как
                            блюда мы отдаем по честной цене, нам придется включить стоимость за доставку:
                        </p>
                        <div className="contacts__delivery">
                            <p className="contacts__delivery-item">Анапа – 150 рублей </p>
                            <p className="contacts__delivery-item contacts__delivery-item--blue">Анапская – 250
                                рублей</p>
                            <p className="contacts__delivery-item contacts__delivery-item--orange">Су-Псех – 250 рублей
                            </p>
                            <p className="contacts__delivery-item contacts__delivery-item--red">Витязево – 350
                                рублей</p>

                            <p className="contacts__delivery-item contacts__delivery-item--purple">Джемете – 350
                                рублей</p>

                        </div>
                    </div>
                    {isDesktop && <div className="contacts__image-delivery">
                        <img src={mapDelivery} alt="image map"/>
                    </div>}
                </div>
            </div>
        </section>
    )
}