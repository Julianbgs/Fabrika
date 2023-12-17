import React from "react";
import {Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import {Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import slideFirst from '../../../assets/images/slider/slide1.png';
import slideSecond from '../../../assets/images/slider/slide2.png';
import slideThird from '../../../assets/images/slider/slide3.png';
import slideFourth from '../../../assets/images/slider/slide4.png';
import arrRight from '../../../assets/images/slider/arr-right.png';
import arrLeft from '../../../assets/images/slider/arr-left.png';

import './AchieveSlider.scss'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import {useMediaQuery} from "react-responsive";


export function AchievmentSlider(props: any) {
    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });
    return (
        <div className="slider">
            <Swiper

                modules={[Pagination, Navigation, EffectCoverflow]}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                pagination={{clickable: true}}
                spaceBetween={50}
                slidesPerView={1}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth:  isMobile ? 100 : 0,
                        modifier: isMobile ? 7 : 0,
                    }
                }

                className="swiper_container"
            >
                <SwiperSlide>
                    <div className="slide">
                        <div className="slide__body">
                            <h3 className="slide__title">Познакомимся!</h3>
                            <p className="slide__sub-title">«Фабрика» рада приветствовать Вас у нас в гостях!</p>
                            <p className="slide__description">Концепция нашего заведения называется «true cost» - в
                                переводе
                                <br/>с английского «честная цена» - система, в которой гости платят за вход, а все блюда
                                и напитки из меню предлагаются по себестоимости.
                            </p>
                            {isMobile && <div className="slide__image">
                                <img src={slideFirst} alt="first slider"/>
                            </div>}
                            <div className="slide__border-elem">
                                <p className="slide__border-description">Стоимость входа в наше заведение
                                    фиксированная: </p>
                                <p className="slide__border-description">До 16:00
                                    <span className="slide__thin">– 100 рублей с человека</span>
                                </p>
                                <p className="slide__border-description">После 16:00
                                    <span className="slide__thin"> – 300 рублей с человека</span>
                                </p>
                                <p className="slide__border-description small">Детям до 7 лет вход бесплатный </p>
                            </div>
                        </div>
                        { isDesktop && <div className="slide__image">
                            <img src={slideFirst} alt="first slider"/>
                        </div>}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="slide__body">
                            <h3 className="slide__title">Доставка!</h3>
                            <p className="slide__sub-title">«Фабрика» рада, что вы выбираете нашу доставку!</p>
                            <p className="slide__description">Хотим сразу рассказать о тарифах по доставке, так как
                                блюда мы отдаем по честной цене, нам придется включить стоимость за доставку:
                            </p>
                            {isMobile && <div className="slide__image">
                                <img src={slideSecond} alt="first slider"/>
                            </div>}
                            <div className="slide__delivery">
                                <p className="slide__delivery-item">Анапа – 150 рублей </p>
                                <p className="slide__delivery-item slide__delivery-item--red">Витязево – 350 рублей</p>
                                <p className="slide__delivery-item slide__delivery-item--blue">Анапская – 250 рублей</p>
                                <p className="slide__delivery-item slide__delivery-item--purple">Джемете – 350 рублей</p>
                                <p className="slide__delivery-item slide__delivery-item--orange">Су-Псех – 250 рублей
                                </p>
                            </div>
                        </div>
                        { isDesktop && <div className="slide__image">
                            <img src={slideSecond} alt="first slider"/>
                        </div>}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="slide__body">
                            <h3 className="slide__title">О важном!</h3>
                            <p className="slide__sub-title">Хотим предостеречь вас о главном!</p>
                            <p className="slide__description">Заказывая блюда на доставку убедитесь, что аллергены, присутствующие в составе отсутствуют, либо пропишите в комментариях к заказу. Вам обязательно прозвонит менеджер и уточнит все ваши пожелания

                            </p>
                            {isMobile && <div className="slide__image">
                                <img src={slideThird} alt="first slider"/>
                            </div>}
                        </div>
                        { isDesktop && <div className="slide__image">
                            <img src={slideThird} alt="first slider"/>
                        </div>}
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide">
                        <div className="slide__body">
                            <h3 className="slide__title">Общая информация!</h3>
                            <p className="slide__sub-title">Мы хотим, чтобы вы звонили нам!</p>
                            <p className="slide__description">Бронь столов осуществляется по номерам:</p>
                            <div className="slide__numbers">
                                <div className="slide__number-item">
                                    <div className="slide__number-title">
                                        Первомайская 39
                                    </div>
                                    <div className="slide__phone">
                                        8 (928) 841-11-71
                                    </div>
                                </div>
                                <div className="slide__number-item">
                                    <div className="slide__number-title">
                                        Переулок Кордонный 1И
                                    </div>
                                    <div className="slide__phone">
                                        8 (938) 557-70-30
                                    </div>
                                </div>
                            </div>
                            {isMobile && <div className="slide__image">
                                <img src={slideFourth} alt="first slider"/>
                            </div>}
                            <div className="slide__border-elem">
                                <p className="slide__border-description">Мы также заинтересованы в классных кадрах,
                                    поэтому будем рады любому сотрудничеству </p>
                            </div>
                        </div>
                        { isDesktop && <div className="slide__image">
                            <img src={slideFourth} alt="first slider"/>
                        </div>}
                    </div>
                </SwiperSlide>

                <div className="slider-controler">
                     <div className="swiper-button-prev slider-arrow">
                        <img src={arrLeft} alt="arr left"/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <img src={arrRight} alt="arr right"/>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </Swiper>
        </div>
    )
}