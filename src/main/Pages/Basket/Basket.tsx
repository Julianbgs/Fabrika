import React, {useEffect} from "react";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import {useDispatch, useSelector} from "react-redux";

import './Basket.scss';

import img from '../../../assets/images/about-us/grid2.png';
import minus from "../../../assets/images/ui/minus.svg";
import plus from "../../../assets/images/ui/plus.svg";
import axios from "axios";
import {apiDev} from "../../Core/environment/api";
import {saveBasket, saveItems} from "../../store/actions";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";


export default function Basket() {
    const dispatch = useDispatch();

    const state: InitialStoreInterface = useSelector((state: any) => state);

    useEffect(() => {
        getBasket();
    }, [])

    function getBasket() {
        axios(`${apiDev}api/basket`, {withCredentials: true}).then(res => {
            console.log(res.data.countOfItems);
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));
        })
    }

    function incCart(productId: number) {
        axios.put(`${apiDev}api/basket/${productId}/inc`, {}, {withCredentials: true}).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));

        });
    }

    function decCart(productId: number) {
        axios.put(`${apiDev}api/basket/${productId}/dec`, {}, {withCredentials: true}).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));
        });
    }

    function getSummaryCost() {
        let sum = 0;
        state.items.forEach(item => {
            sum = sum + (item.unitPrice * item.quantity);
        })
        return sum;
    }

    return (
        <>
            <Header/>
            <div className="container-small">
                <section className="cart-main">
                    {state?.items && state.items.length > 0 &&
                    <>
                        <div className="cart-main__items">
                            {state?.items && state?.items.map(item => {
                                return <div className="cart-main__item">
                                    <div className="cart-main-img">
                                        <img src={img} alt="cart img"/>
                                    </div>
                                    <div className="cart__box">
                                        <div className="cart__title">
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="operation-cart width-xs">

                                        <div onClick={() => decCart(item.productId)}>
                                            <img src={minus} alt=""/>
                                        </div>
                                        <span>
                                {item.quantity}
                            </span>
                                        <div onClick={() => incCart(item.productId)}>
                                            <img src={plus} alt=""/>
                                        </div>
                                    </div>
                                    <div className="cart-main__price">
                                        {item.unitPrice * (item?.quantity ? item?.quantity : 1)}₽
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="sum">
                            Итого: {getSummaryCost()}
                        </div>
                    </>}

                    {state?.items && state.items.length === 0 && <div className="empty">
                        Корзина пуста
                    </div>}
                    <form className="form">
                        <div className="form__align">
                            <div className="form__box">
                                <div className="form__title">
                                    Заполните данные
                                </div>
                                <input placeholder="Имя" className="form__input" type="text"/>
                                <input placeholder="+7 (" className="form__input" type="text"/>
                                <input placeholder="Адрес" className="form__input" type="text"/>
                            </div>
                            <div className="form__box">
                                <div className="form__title">
                                    Способ оплаты
                                </div>
                                <div className="radio__box">
                                    <input className="form__radio" name="payment" type="radio"/>
                                    <label>Наличные</label>
                                </div>
                                <div className="radio__box">
                                    <input className="form__radio" name="payment" type="radio"/>
                                    <label>Перевод на карту</label>
                                </div>
                                <div className="radio__box">
                                    <input className="form__radio" name="payment" type="radio"/>
                                    <label>Банковской картой курьеру</label>
                                </div>
                            </div>
                        </div>
                        <div className="form__center">
                            <div className="submit">
                                Форомить заказ
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <Footer/>
        </>
    )
}