import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import slideFirst from '../../../assets/images/slider/slide1.png';
import slideSecond from '../../../assets/images/slider/slide1.png';
import slideThird from '../../../assets/images/slider/slide1.png';
import slideFourth from '../../../assets/images/slider/slide1.png';

import './AchieveSlider.scss'
import 'swiper/css';
import 'swiper/css/pagination';

export function AchievmentSlider(props: any) {
    return (
        <Swiper

            modules={[Pagination, Navigation, Scrollbar]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className="slide">
                    <div className="slide__body">
                        <h3 className="slide__title">Познакомимся!</h3>
                        <p className="slide__sub-title">«Фабрика» рада приветствовать Вас у нас в гостях!</p>
                        <p className="slide__description">Концепция нашего заведения называется «true cost» - в переводе
                            <br/>с английского «честная цена» - система, в которой гости платят за вход, а все блюда и напитки из меню предлагаются по себестоимости.
                        </p>
                        <div className="slide__border-elem">
                            <p className="slide__border-description">Стоимость входа в наше заведение фиксированная: </p>
                            <p className="slide__border-description">До 16:00
                                <span className="slide__thin">– 100 рублей с человека</span>
                            </p>
                            <p className="slide__border-description">После 16:00
                                <span className="slide__thin"> – 300 рублей с человека</span>
                            </p>
                            <p className="slide__border-description small">Детям до 7 лет вход бесплатный </p>
                        </div>
                    </div>
                    <div className="slide__image">
                        <img src={slideFirst} alt="first slider"/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
    )
}