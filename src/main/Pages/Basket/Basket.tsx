import React, {useEffect} from "react";
import {InitialStoreInterface} from "../../Core/interfaces/store";
import {useDispatch, useSelector} from "react-redux";

import './Basket.scss';

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
import {useNavigate} from "react-router";


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


export default function Basket() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    function incCart(productId: number) {
        axios.put(`${apiDev}api/basket/${productId}/inc`, {}, {withCredentials: true}).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));

        });
    }

    function decCart(productId: number) {
        axios.put(`${apiDev}api/basket/${productId}/dec`, {}, {withCredentials: true}).then(res => {
            dispatch(saveBasket(res.data.countOfItems));
            dispatch(saveItems(res.data.basketItems));
        });
    }

    function getSummaryCost() {
        let sum = 0;
        state.items.forEach(item => {
            sum = sum + (item.unitPrice * item.quantity);
        })
        return sum;
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
        <div className={isDesktop && state?.items && state?.items.length === 0 ? 'wrapper' : ''}>
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
                <section className="cart-main">
                    {state?.items && state.items.length > 0 &&
                    <>
                        <div className="cart-main__items">
                            {state?.items && state?.items.map(item => {
                                return <div className="cart-main__item">
                                    <div className="cart-main-img">
                                        <img src={img} alt="cart img"/>
                                    </div>
                                    <div className="cart__box">
                                        <div className="cart__title">
                                            {item.name}
                                        </div>
                                    </div>
                                    <div className="operation-cart width-xs">

                                        <div onClick={() => decCart(item.productId)}>
                                            <img src={minus} alt=""/>
                                        </div>
                                        <span>
                                {item.quantity}
                            </span>
                                        <div onClick={() => incCart(item.productId)}>
                                            <img src={plus} alt=""/>
                                        </div>
                                    </div>
                                    <div className="cart-main__price">
                                        {item.unitPrice * (item?.quantity ? item?.quantity : 1)}₽
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="sum">
                            Итого: {getSummaryCost()}
                        </div>
                    </>}

                    {state?.items && state.items.length === 0 && <div className="empty">
                        Корзина пуста
                    </div>}
                    { state?.items && state.items.length > 0 && <Formik
                        initialValues={{ email: '', name: '', number: '', address: '', picked: ''}}
                        // validate={values => {
                        //     const errors = {
                        //         email: '',
                        //         name: '',
                        //         number: '',
                        //         address: '',
                        //         picked: '',
                        //     };
                        //     if (!values.email) {
                        //         errors.email = 'Required';
                        //     } else if (
                        //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        //     ) {
                        //         errors.email = 'Invalid email address';
                        //     }
                        //
                        //     if (!values.name.trim()) {
                        //         errors.email = 'Required';
                        //         errors.name = 'Required';
                        //         errors.address = 'Required';
                        //         errors.number = 'Required';
                        //         errors.picked = 'Required';
                        //     }
                        //
                        //     return errors;
                        // }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                axios.post(`${apiDev}api/order`, {
                                    address: {
                                        street: values.address,
                                    },
                                    phoneNumber: values.number,
                                    paymentMethod: +values.picked,
                                    restaurantId: state.id
                                }, {withCredentials: true})
                                navigate('/offer-done');
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                              /* and other goodies */
                          }) => (
                            <form className="form" onSubmit={handleSubmit}>
                                <div className="form__align">
                                    <div className="form__box">
                                        <div className="form__title">
                                            Заполните данные
                                        </div>
                                        <input placeholder="Имя" className="form__input" type="text"
                                               name="name"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.name}
                                        />
                                        <input placeholder="+7 (" className="form__input" type="text"
                                               name="number"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.number}/>
                                        <input placeholder="Адрес" className="form__input" type="text"
                                               name="address"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.address}/>
                                        <input placeholder="Email"
                                               className="form__input"
                                               type="email"
                                               name="email"
                                               onChange={handleChange}
                                               onBlur={handleBlur}
                                               value={values.email}/>
                                    </div>
                                    <div className="form__box">
                                        <div className="form__title">
                                            Способ оплаты
                                        </div>
                                        <div className="radio__box">
                                            <label>
                                                <Field type="radio" name="picked" value="0" />
                                                Наличные</label>
                                        </div>
                                        <div className="radio__box">
                                            <label>
                                            <Field type="radio" name="picked" value="1" />
                                            Перевод на карту</label>
                                        </div>
                                        <div className="radio__box">
                                            <label>
                                                <Field type="radio" name="picked" value="2" />
                                                Банковской картой курьеру</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form__center">
                                    <input
                                        type="submit"
                                        className="submit"
                                        value="Оформить заказ"
                                    />
                                </div>
                            </form>
                        )}
                    </Formik>}
                </section>
            </div>
            <Footer/>
        </div>
    )
}