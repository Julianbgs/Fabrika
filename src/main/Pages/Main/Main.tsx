import React, {useEffect} from "react";
import Header from "../../Components/Header/Header";
import {useNavigate} from "react-router";
import {useSelector} from "react-redux";
import {InitialStoreInterface} from "../../Core/interfaces/store";

export default function Main() {
    const navigate = useNavigate();
    const initial: InitialStoreInterface[] = useSelector((state: any) => state);
    const address = initial[0] ? initial[0].address : null;
    useEffect(() => {
        // callback function to call when event triggers
        if (!address) {
            navigate('/choose-restaurant');
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
    return(
        <>
            <Header />
        </>
    )
}