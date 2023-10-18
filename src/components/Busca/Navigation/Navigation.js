import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import '../Navigation/NavigationStyles.css'

function Navigation() {
  return (
    <nav className="nav1">
    <div className="nav-container">
      <input
        className="search-input"
        type="text"
        placeholder="Faça sua busca."
      />
    </div>
    <div className="profile-container">
      <a href="#">
        <FiHeart className="nav-icons" />
      </a>
      <a href="">
        <AiOutlineShoppingCart className="nav-icons" />
      </a>
      <a href="">
        <AiOutlineUserAdd className="nav-icons" />
      </a>
    </div>
  </nav>
  )
}

export default Navigation;
