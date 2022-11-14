import { NavLink } from 'react-router-dom'
import LogoOfKasa from '../../assets/img/header/LOGO.png'
import '../../utils/styles/components/header.css'

function Header() {
  return (
    <nav className="GlobalNav">
      <div className="DivIcon">
        <img className="LogoKasa" src={LogoOfKasa} alt="" />
      </div>
      <div className="DivLink">
        <NavLink exact className="link" to="/">
          Accueil
        </NavLink>
        <NavLink className="link" to="/about">
          A Propos
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
