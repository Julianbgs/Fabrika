import React, {useCallback, useEffect, useState} from "react";
import {SelectInterface, SelectOptionInterface} from "../../Core/interfaces/ui-elements";
import arr from '../../../assets/images/ui/select/down-arrow.png';
import './Select.css';

export default function Select(props: SelectInterface) {
    const {options} = props;

    const [isShowOptions, setIsShowOptions] = useState(false);
    const [activeOption, setActiveOption] = useState({
        address: 'Кордоный переулок 12',
        title: 'Анапа'
    });

    const getActiveOption = useCallback((option: SelectOptionInterface) => {
        setActiveOption(option);
        setIsShowOptions(false);
    }, [])
    // useEffect(() => {
    //
    // }, [isShowOptions])

    return (
        <div className="select">
            <div className="select__top-elems">
                <div className="select__title">{activeOption.title}</div>
                <div className="select__address">{activeOption.address}</div>
            </div>
            <div className="select__dropdown" onClick={() => setIsShowOptions(!isShowOptions)}>
                <img src={arr} alt="arr img"/>
            </div>
            {isShowOptions &&
            <div className="select__option">
                {options.map(option => {
                    return (
                        <div className="select__top-elems" onClick={() => getActiveOption(option)}>
                            <div className="select__title">{option.title}</div>
                            <div className="select__address">{option.address}</div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}