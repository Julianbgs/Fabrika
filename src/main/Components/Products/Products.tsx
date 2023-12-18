import React, { useState, useRef } from "react";
import './Products.scss';
import { InitialStoreInterface } from "../../Core/interfaces/store";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {apiDev} from "../../Core/environment/api";
import {saveCategories} from "../../store/actions";

export default function Products() {
    const dispatch = useDispatch();
    const state: InitialStoreInterface = useSelector((state: any) => state);

    function chooseProduct(id: number) {
        axios(`${apiDev}api/category?restaurantId=${id}`).then(res => {
            dispatch(saveCategories(res.data));
        })
    }
    return (
        <section className="products">
            <div className="after" />
            <div
                id="category"
                className="category"
            >
                {state.categories && state.categories.map(product => (
                    <div key={product.id} className="category__title">
                        {product.name}
                    </div>
                ))}
            </div>
            <div className="before" />
        </section>
    );
}
