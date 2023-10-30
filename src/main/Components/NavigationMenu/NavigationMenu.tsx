import React from "react";
import './NavigationMenu.css';

export default function NavigationMenu() {
    return (
        <div className="nav-menu">
            <div className="nav-menu__elem">
                <a href="javascript:">Роллы</a>
            </div>
            <div className="nav-menu__elem">
                <a href="javascript:">Сеты</a>
            </div>
            <div className="nav-menu__elem">
                <a href="javascript:">Запеченые роллы</a>
            </div>
            <div className="nav-menu__elem">
                <a href="javascript:">Горячие блюда</a>
            </div>
            <div className="nav-menu__elem">
                <a href="javascript:">Десерты</a>
            </div>
            <div className="nav-menu__elem">
                <a href="javascript:">Напитки</a>
            </div>
        </div>
    )
}