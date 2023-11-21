import  "../Navbar/NavbarStyles.css"
import { Link } from "react-router-dom"
import { MenuItems } from "../Rotas/ManuItems"
import { useState} from "react";
import React from "react";
import logoimg from '../../assets/caregiverimg.png'

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    

    return (
        <nav className="navbarItems">
            <h1 className="navbar-logo">
            <img className="logo-img" src={logoimg} alt="logo" />
                </h1>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) => (

                    <li key={index}>
                        <Link className={item.cName} to={item.url} id={item.id}>
                            <i className={item.icon}></i>
                            {item.title}
                        </Link>
                    </li>
                ))}
                {/* <div className="navbar-buttons">
                    <button>Seja Cuidador</button>
                    <button>Conectar</button>
                </div> */}
            </ul>
        </nav>
    );
}

export default React.memo(Navbar);