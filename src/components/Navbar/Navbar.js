import { Component } from "react";
import  "../Navbar/NavbarStyles.css"
import { Link } from "react-router-dom"
import { MenuItems } from "../Rotas/ManuItems"

class Navbar extends Component{
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked});
    }
    render(){
        return (
            <nav className="navbarItems">
                <h1 className="navbar-logo">Caregiver</h1>

                    <div className="menu-icons" onClick={this.handleClick}>
                        <i className={this.state.clicked ?
                        "fas fa-times" : "fas fa-bars"}></i> 
                    </div>

                <ul className={this.state.clicked ? 
                "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) =>{
                        return (
                            <li key={index}>
                        <Link className={item.cName}
                         to={item.url}>
                        <i className={item.icon}>
                        </i>{item.title}</Link>
                            </li>
                        )
                })}
                <div className="navbar-buttons">
                <button>Seja Cuidador</button>
                <button>Conectar</button>
                </div>
                </ul>
            </nav>
        )
    }
}

export default Navbar;