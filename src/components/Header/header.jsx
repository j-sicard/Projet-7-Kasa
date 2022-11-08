import { Link } from 'react-router-dom'
import LogoOfKasa from '../../assets/img/header/LOGO.png'
import '../../utils/styles/components/header.css'

function Header() {
  return (
    <nav className="GlobalNav">
      <div className="DivIcon">
        <img className="LogoKasa" src={LogoOfKasa} alt="" />
      </div>
      <div className="DivLink">
        <Link className="link" to="/">
          Accueil
        </Link>
        <Link className="link" to="/about">
          A Propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
