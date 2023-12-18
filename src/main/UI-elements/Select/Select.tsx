import React, {useCallback, useEffect, useRef, useState} from "react";
import {SelectInterface, SelectOptionInterface} from "../../Core/interfaces/ui-elements";
import arr from '../../../assets/images/ui/select/arr.svg';
import './Select.scss';
import {useDispatch, useSelector} from "react-redux";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import {saveAddress, saveCategories, saveRestaurantId} from "../../store/actions";
import axios from "axios";
import {apiDev} from "../../Core/environment/api";

export default function Select(props: SelectInterface) {
    const {options} = props;
    const dispatch = useDispatch();

    const initialOptions: InitialStoreInterface = useSelector((state: any) => state);
    const address = initialOptions ? initialOptions.address : null;
    const title = initialOptions ? initialOptions.title : null;

    const select = useRef<any>(null);
    const [isShowOptions, setIsShowOptions] = useState(false);
    const [activeOption, setActiveOption] = useState({});

    const handleDocumentClick = (e: MouseEvent) => {
        // Проверьте, был ли клик за пределами селекта
        if (select.current && !select.current.contains(e.target as Node)) {
            setIsShowOptions(false);
        }
    }

    const getActiveOption = useCallback((option: SelectOptionInterface, id: number) => {
        axios(`${apiDev}api/category?restaurantId=${id}`).then(res => {
            dispatch(saveCategories(res.data));
            dispatch(saveRestaurantId(id));
        })
        dispatch(saveAddress(option.title, option.address));
        setIsShowOptions(false);
    }, [])

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => {
            document.removeEventListener('click', handleDocumentClick);
        };

    }, [])

    return (
        <div className="select" ref={select} >
            <div className="select__top-elems">
                <div className="select__address">{address}</div>
            </div>
            <div className="select__dropdown" onClick={() => setIsShowOptions(!isShowOptions)}>
                <img src={arr} alt="arr img"/>
            </div>
            {isShowOptions &&
            <div className="select__option">
                {options.map((option, index) => {
                    return (
                        <div className="select__top-elems" onClick={() => getActiveOption(option, index + 1)}>
                            <div className="select__address select__address--opt">{option.address}</div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}