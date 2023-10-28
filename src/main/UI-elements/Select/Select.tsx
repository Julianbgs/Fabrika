import React from "react";
import {SelectInterface} from "../../Core/interfaces/ui-elements";
import arr from '../../../assets/images/ui/select/down-arrow.png';
import './Select.css';

export default function Select(props: SelectInterface) {
    const {title, address, options} = props;
    return (
        <div className="select">
            <div className="select__top-elems">
                <div className="select__title">{title}</div>
                <div className="select__address">{address}</div>
            </div>
            <div className="select__dropdown">
                <img src={arr} alt="arr img"/>
            </div>
        </div>
    )
}