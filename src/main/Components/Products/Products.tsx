import React, { useState, useRef } from "react";
import './Products.scss';
import { InitialStoreInterface } from "../../Core/interfaces/store";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {apiDev} from "../../Core/environment/api";
import {saveCategories, saveProducts} from "../../store/actions";

import basket from '../../../assets/images/header/cart.svg'

export default function Products() {
    const dispatch = useDispatch();
    const state: InitialStoreInterface = useSelector((state: any) => state);

    function chooseProduct(categoryId: number) {
        axios(`${apiDev}api/product?restaurantId=${state.id}&categoryId=${categoryId}`).then(res => {
            dispatch(saveProducts(res.data));
        })
    }

    console.log(state.products);
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
                {state.products && state.products.map((product) => {
                    return <div className="product" key={product.id}>
                       <div className="product__title">{product.name}</div>
                        <div className="product__descr">{product.description}</div>
                        <div className="product__box">
                            <div className="product__weight">
                                200гр
                            </div>
                            <div className="product__price">{product.price}₽</div>
                            <div className="basket">
                                <img src={basket} alt="img cart"/>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
}
