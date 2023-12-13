import React from "react";
import './ChooseRestaurant.scss'
import {useDispatch} from "react-redux";
import {SelectOptionInterface} from "../../Core/interfaces/ui-elements";
import {saveAddress} from "../../store/actions";
import {useNavigate} from "react-router";

export default function ChooseAddress(props: any) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
        navigate('/')
        props.closeModal();
    }

    return (
        <div className="choose">
            <div className="choose__title">Выберите адрес кафе</div>
            <div className="choose__wrapper">
                <div className="choose__address"
                     onClick={() => chooseAddress(firstAddress)}
                >
                    Первомайская 39
                </div>
                <div className="choose__address"
                     onClick={() => chooseAddress(secondAddress)}
                >
                    Кордоный переулок 1И
                </div>
            </div>
        </div>
    )
}