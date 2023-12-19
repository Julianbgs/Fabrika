import React, {useState} from "react";
import slideSecond from "../../../assets/images/slider/slide2.png";

import './DeliveryModal.scss';
import {useDispatch} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {SelectOptionInterface} from "../../Core/interfaces/ui-elements";
import {saveAddress} from "../../store/actions";

export default function DeliveryModal(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [previousPath, setPreviousPath] = useState<string | null>(null);

    const handleCloseModal = () => {
        props.closeModal();
        if (previousPath) {
            navigate(previousPath);
        } else {
            // Если previousPath не определен, вернуться на главную страницу
            navigate('/');
        }
    }
    return (
        <div className="slideD">
            <div className="slide__body">
                <h3 className="slide__title">Доставка!</h3>
                <p className="slide__sub-title">«Фабрика» рада, что вы выбираете нашу доставку!</p>
                <p className="slide__description">Хотим сразу рассказать о тарифах по доставке, так как
                    блюда мы отдаем по честной цене, нам придется включить стоимость за доставку:
                </p>
                <div className="slide__delivery">
                    <p className="slide__delivery-item">Анапа – 150 рублей </p>
                    <p className="slide__delivery-item slide__delivery-item--red">Витязево – 350 рублей</p>
                    <p className="slide__delivery-item slide__delivery-item--blue">Анапская – 250 рублей</p>
                    <p className="slide__delivery-item slide__delivery-item--purple">Джемете – 350 рублей</p>
                    <p className="slide__delivery-item slide__delivery-item--orange">Су-Псех – 250 рублей
                    </p>
                </div>
            </div>
            <div className="slide__image">
                <img src={slideSecond} alt="first slider"/>
            </div>
        </div>
    )
}