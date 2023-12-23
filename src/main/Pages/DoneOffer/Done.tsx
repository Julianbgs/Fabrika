import React, {useEffect} from "react";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import {useDispatch, useSelector} from "react-redux";

import './Done.scss';

import img from '../../../assets/images/about-us/grid2.png';
import minus from "../../../assets/images/ui/minus.svg";
import plus from "../../../assets/images/ui/plus.svg";
import axios from "axios";
import {apiDev} from "../../Core/environment/api";
import {saveBasket, saveItems} from "../../store/actions";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import {Field, Formik} from "formik";
import Modal from "react-modal";
import ChooseAddress from "../../Components/ChooseAddressModal/ChooseRestaurant";
import {useMediaQuery} from "react-responsive";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 'none',
        transform: 'translate(-50%, -50%)',
        width: '715px',
        height: '490px',
        background: 'transparent'
    },
};


const customStylesMobile = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 'none',
        transform: 'translate(-50%, -50%)',
        width: '279px',
        height: '490px',
        background: 'transparent'
    },
};


export default function Done() {
    const dispatch = useDispatch();

    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });

    const state: InitialStoreInterface = useSelector((state: any) => state);
    const address = state ? state.address : null;

    useEffect(() => {
        getBasket();

        if (!address) {
            openModal()
        }
    }, [])

    function getBasket() {
        axios(`${apiDev}api/basket`, {withCredentials: true}).then(res => {
            console.log(res.data.countOfItems);
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));
        })
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenD, setIsOpenD] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function openModalD() {
        setIsOpenD(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function closeModalD() {
        setIsOpenD(false);
    }

    return (
        <div className='wrapper'>
            <Header/>
            <div className="empty">
                Заказ успешно создан!
            </div>
            <Footer/>
        </div>
    )
}