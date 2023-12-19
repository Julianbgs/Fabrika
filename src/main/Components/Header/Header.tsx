import React from "react";
import HeaderItem from "../../UI-elements/HeaderItem/HeaderItem";
import './Header.scss';
import StyledLink from "../../StyledComponents/Link/Link";
import Select from "../../UI-elements/Select/Select";
import {useMediaQuery} from "react-responsive";
import MenuModal from "../MenuModal/MenuModal";
import Modal from "react-modal";


import Logo from '../../../assets/images/header/Logo.svg';
import Cart from '../../../assets/images/header/cart.svg';
import Burger from '../../../assets/images/header/burger.svg';
import Subtract from '../../../assets/images/header/Subtract.svg';

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
        width: '189px',
        height: '490px',
        background: 'transparent'
    },
};

export default function Header() {
    const options = [
        {title: 'Анапа', address: 'Кордонный переулок 1И'},
        {title: 'Анапа', address: 'Первомайская 39'},
    ]

    const isMobile = useMediaQuery({
        query: "(max-width: 786px)"
    });

    const isDesktop = useMediaQuery({
        query: "(min-width: 1200px)"
    });

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="container">
            {isMobile && <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Mobile Menu"
                style={customStylesMobileD}
            >
                <MenuModal />
            </Modal> }
            <div className="header">
                {isMobile && <div className="burger" onClick={() => openModal()}>
                    <img src={Burger} alt="burger btn"/>
                </div>}
                <nav className="header__nav">
                    {isDesktop && <div className="header__box">
                        <Select options={options}/>
                        <ul className="header__menu">
                            <li className="header__elem">
                                <StyledLink to={'/'}>
                                    <HeaderItem title={'Меню'}/>
                                </StyledLink>
                            </li>
                        </ul>
                    </div> }
                    <div className="header__logo">
                        <img src={Logo} alt="Logo site"/>
                    </div>
                    {isMobile && <Select options={options}/>}
                    {isDesktop && <div className="header__box">
                        <ul className="header__menu">
                            <li className="header__elem">
                                <StyledLink to={'/about-us'}>
                                    <HeaderItem title={'О нас'}/>
                                </StyledLink>
                                <StyledLink to={'/contacts'}>
                                    <HeaderItem isLastItem={true} title={'Контакты'}/>
                                </StyledLink>
                            </li>
                        </ul>
                        <div className='header__cart'>
                            <img src={Cart} alt="cart site"/>
                        </div>
                    </div>}
                </nav>
                {isMobile && <div className="contact" onClick={() => openModal()}>
                    <img src={Subtract} alt="contact btn"/>
                </div>}
            </div>
        </div>
    )
}