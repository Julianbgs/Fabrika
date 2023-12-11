import React from "react";
import './ChooseRestaurant.css'
import {useDispatch} from "react-redux";
import {SelectOptionInterface} from "../../Core/interfaces/ui-elements";
import {saveAddress} from "../../store/actions";
import {useNavigate} from "react-router";

export default function ChooseAddress() {
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
    }

    return (
        <div className="choose">
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