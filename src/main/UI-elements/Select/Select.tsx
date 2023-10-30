import React, {useCallback, useEffect, useRef, useState} from "react";
import {SelectInterface, SelectOptionInterface} from "../../Core/interfaces/ui-elements";
import arr from '../../../assets/images/ui/select/down-arrow.png';
import './Select.css';
import {useDispatch, useSelector} from "react-redux";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import {saveAddress} from "../../store/actions";

export default function Select(props: SelectInterface) {
    const {options} = props;
    const dispatch = useDispatch();

    const initialOptions: InitialStoreInterface[] = useSelector((state: any) => state);
    const address = initialOptions[0] ? initialOptions[0].address : null;
    const title = initialOptions[0] ? initialOptions[0].title : null;

    const select = useRef<any>(null);
    const [isShowOptions, setIsShowOptions] = useState(false);
    const [activeOption, setActiveOption] = useState({});

    const handleDocumentClick = (e: MouseEvent) => {
        // Проверьте, был ли клик за пределами селекта
        if (select.current && !select.current.contains(e.target as Node)) {
            setIsShowOptions(false);
        }
    }

    const getActiveOption = useCallback((option: SelectOptionInterface) => {
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
                <div className="select__title">{title}</div>
                <div className="select__address">{address}</div>
            </div>
            <div className="select__dropdown" onClick={() => setIsShowOptions(!isShowOptions)}>
                <img src={arr} alt="arr img"/>
            </div>
            {isShowOptions &&
            <div className="select__option">
                {options.map(option => {
                    return (
                        <div className="select__top-elems" onClick={() => getActiveOption(option)}>
                            <div className="select__title select__title--opt">{option.title}</div>
                            <div className="select__address select__address--opt">{option.address}</div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}