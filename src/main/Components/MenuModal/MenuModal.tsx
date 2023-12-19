import React, { useState } from "react";
import './MenuModal.scss'
import { useDispatch } from "react-redux";
import { SelectOptionInterface } from "../../Core/interfaces/ui-elements";
import {saveAddress, saveCategories, saveRestaurantId} from "../../store/actions";
import { useNavigate, useLocation } from "react-router-dom";
import {apiDev} from "../../Core/environment/api";
import axios from "axios";
import StyledLink from "../../StyledComponents/Link/Link";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";

export default function MenuModal(props: any) {
    return (
        <div className="menu">
                <StyledLink to={'/'}>
                    <button className="mobile__btn">
                        Меню
                    </button>
                </StyledLink>
                <StyledLink to={'/about-us'}>
                    <button className="mobile__btn white">
                        Онас
                    </button>
                </StyledLink>
                <StyledLink to={'/contacts'}>
                    <button className="mobile__btn mr-0">
                        Контакты
                    </button>
                </StyledLink>
        </div>
    )
}
