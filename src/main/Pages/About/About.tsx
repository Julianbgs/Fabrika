import React, {useEffect} from "react";
import Header from "../../Components/Header/Header";
import {useDispatch, useSelector} from "react-redux";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import Modal from 'react-modal';
import ChooseAddress from "../../Components/ChooseAddressModal/ChooseRestaurant";

import './About.scss';
import Footer from "../../Components/Footer/Footer";
import AboutUs from "../../Components/About-us/About-us";
import {useMediaQuery} from "react-responsive";
import DeliveryModal from "../../Components/DeliveryModal/DeliveryModal";
import axios from "axios";
import {apiDev} from "../../Core/environment/api";
import {saveBasket} from "../../store/actions";

import basket from "../../../assets/images/ui/basket.svg";

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


const customStylesD = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 'none',
        transform: 'translate(-50%, -50%)',
        width: '1035px',
        height: '490px',
        background: 'transparent'
    },
};

const customStylesMobileD = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        border: 'none',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '490px',
        background: 'transparent'
    },
}
export default function About() {
    const dispatch = useDispatch();

    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });
    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });

    const initial: InitialStoreInterface = useSelector((state: any) => state);
    const address = initial ? initial.address : null;
    useEffect(() => {
        axios(`${apiDev}api/basket`).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
        });
        // callback function to call when event triggers
        if (!address) {
            openModal()
        }
        // const onPageLoad = () => {
        //     navigate('/choose-restaurant');
        // };
        //
        // // Check if the page has already loaded
        // if (document.readyState === 'complete') {
        //     onPageLoad();
        // } else {
        //     window.addEventListener('load', onPageLoad, false);
        //     // Remove the event listener when component unmounts
        //     return () => window.removeEventListener('load', onPageLoad);
        // }
    }, []);

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
        <>
            {isMobile && <Modal
                isOpen={modalIsOpenD}
                onRequestClose={closeModalD}
                contentLabel="Choose Cafe"
                style={customStylesD}
            >
                <DeliveryModal closeModal={closeModal}/>
            </Modal>
            }
            {isDesktop && <Modal
                isOpen={modalIsOpenD}
                onRequestClose={closeModalD}
                contentLabel="Choose Cafe"
                style={customStylesMobileD}
            >
                <DeliveryModal closeModal={closeModal}/>
            </Modal>
            }
            { isDesktop && <div className="delivery" onClick={() => openModalD()}>
                Доставка
            </div>}
            {isMobile && <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Choose Cafe"
                style={customStylesMobile}
            >
                <ChooseAddress closeModal={closeModal}/>
            </Modal>
            }
            {isDesktop && <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Choose Cafe"
                style={customStyles}
            >
                <ChooseAddress closeModal={closeModal}/>
            </Modal>
            }
            <Header/>
            <div className="container-small">
                <AboutUs />
            </div>
            <div className="cart">
                <div className="count">
                    {initial.count}
                </div>
                <img src={basket} alt="basket img"/>
            </div>
            <Footer />
        </>
    )
}