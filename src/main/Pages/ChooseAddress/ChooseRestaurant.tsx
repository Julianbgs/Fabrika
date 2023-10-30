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
        address: 'Ленина 160'
    };

    const secondAddress = {
        title: 'Анапа',
        address: ' Кордоный переулок 12'
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
                    Анапа, Ленина 160
                </div>
                <div className="choose__address"
                     onClick={() => chooseAddress(secondAddress)}
                >
                    Анапа, Кордоный переулок 12
                </div>
            </div>
        </div>
    )
}