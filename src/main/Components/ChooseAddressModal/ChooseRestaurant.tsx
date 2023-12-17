import React, { useState } from "react";
import './ChooseRestaurant.scss'
import { useDispatch } from "react-redux";
import { SelectOptionInterface } from "../../Core/interfaces/ui-elements";
import { saveAddress } from "../../store/actions";
import { useNavigate, useLocation } from "react-router-dom";

export default function ChooseAddress(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [previousPath, setPreviousPath] = useState<string | null>(null);

    const firstAddress = {
        title: 'Анапа',
        address: 'Первомайская 39'
    };

    const secondAddress = {
        title: 'Анапа',
        address: 'Кордоный переулок 1И'
    };

    const chooseAddress = (options: SelectOptionInterface) => {
        dispatch(saveAddress(options.title, options.address));
        props.closeModal();
    }

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
        <div className="choose">
            <div className="choose__title">Выберите адрес кафе</div>
            <div className="choose__wrapper">
                <div className="choose__address"
                     onClick={() => {
                         setPreviousPath(location.pathname);
                         chooseAddress(firstAddress);
                     }}
                >
                    Первомайская 39
                </div>
                <div className="choose__address"
                     onClick={() => {
                         setPreviousPath(location.pathname);
                         chooseAddress(secondAddress);
                     }}
                >
                    Кордоный переулок 1И
                </div>
            </div>
        </div>
    )
}
