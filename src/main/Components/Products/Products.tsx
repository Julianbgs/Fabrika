import React, { useState, useEffect } from "react";
import './Products.scss';
import { InitialStoreInterface } from "../../Core/interfaces/store";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { apiDev } from "../../Core/environment/api";
import {saveBasket, saveItems, saveProducts} from "../../store/actions";

import basket from '../../../assets/images/header/cart.svg';
import img from '../../../assets/images/about-us/grid2.png';
import plus from '../../../assets/images/ui/plus.svg';
import minus from '../../../assets/images/ui/minus.svg';

export default function Products() {
    const dispatch = useDispatch();
    const state: InitialStoreInterface = useSelector((state: any) => state);

    useEffect(() => {
        chooseProduct(1);
    }, [state.id]);

    function chooseProduct(categoryId: number) {
        axios(`${apiDev}api/product?restaurantId=${state.id ? state.id : 1}&categoryId=${categoryId}`).then(res => {
            dispatch(saveProducts(res.data));
        });
    }

    function showIncDecCart(productId: number) {
        axios.put(`${apiDev}api/basket/${productId}`, {}, {withCredentials: true}).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));
        });
    }

    function incCart(productId: number) {
        axios.put(`${apiDev}api/basket/${productId}/inc`, {}, {withCredentials: true}).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));

        });
    }

    function deleteProduct(productId: number) {
        axios.delete(`${apiDev}api/basket/${productId}`, {withCredentials: true}).then(res => {
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
    return (
        <section className="products">
            <div className="after" />
            <div
                id="category"
                className="category"
            >
                {state.categories && state.categories.map(category => (
                    <div key={category.id} onClick={() => chooseProduct(category.id)} className="category__title">
                        {category.name}
                    </div>
                ))}
            </div>
            <div className="before" />
            <div className="products__main">
                {state.products && state.products.map((product, i) => {
                    return (
                        <div className="product" key={product.id}>
                            <div className="product__image">
                                <img src={img} alt="" />
                            </div>
                            <div>
                                <div className="product__title">{product.name}</div>
                                <div className="product__descr">{product.description}</div>
                            </div>
                            { !(state.items && state.items.find((item : any) => item.productId === product.id)) &&
                                <div className="product__box">
                                <div className="product__weight">
                                    {product.weightInGrams}гр
                                </div>
                                <div className="product__price">{product.price}₽</div>
                                <div className="basket" onClick={() => showIncDecCart(product.id)}>
                                    <img src={basket} alt="img cart" />
                                </div>

                            </div>
                            }
                            {state.items && state.items.find((item : any) => item.productId === product.id) &&
                                <div className="operation-cart">

                                    <div onClick={() => decCart(product.id)}>
                                        <img src={minus} alt=""/>
                                    </div>
                                    <span>
                                        {state.items && state.items.find((item : any) => item.productId === product.id)?.quantity}
                                    </span>
                                    <div onClick={() => incCart(product.id)}>
                                        <img src={plus} alt=""/>
                                    </div>
                                </div>
                            }
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
