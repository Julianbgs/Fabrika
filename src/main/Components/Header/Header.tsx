import React from "react";
import {Link} from "react-router-dom";

export default function Header () {
    return (
        <div className="header">
            <nav>
                <div>Select address</div>
                <ul>
                    <li>
                        <Link to={''} >
                            <p>Меню</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}