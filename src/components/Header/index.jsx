import { Link } from 'react-router-dom'
import LogoOfKasa from '../../assets/img/header/LOGO.png'
import '../../utils/styles/components/header.css'

function Header() {
  return (
    <nav className="GlobalNav">
      <div className="DivIcon">
        <img src={LogoOfKasa} alt="" />
      </div>
      <div className="DivLink">
        <Link to="/">Accueil</Link>
        <Link to="/about">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
