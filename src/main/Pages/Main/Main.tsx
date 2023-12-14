import React, {useEffect} from "react";
import Header from "../../Components/Header/Header";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import Modal from 'react-modal';
import ChooseAddress from "../../Components/ChooseAddressModal/ChooseRestaurant";
import {AchievmentSlider} from "../../Components/AchieveSlider/AchieveSlider";

import './Main.css';


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

export default function Main() {
    const navigate = useNavigate();
    const initial: InitialStoreInterface[] = useSelector((state: any) => state);
    const address = initial[0] ? initial[0].address : null;
    useEffect(() => {
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

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        return;
    }

    function closeModal() {
        setIsOpen(false);
    }


    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                contentLabel="Choose Cafe"
                style={customStyles}
            >
                <ChooseAddress closeModal={closeModal}/>
            </Modal>
            <div className="container">
                <Header/>
                <AchievmentSlider/>
            </div>
        </>
    )
}