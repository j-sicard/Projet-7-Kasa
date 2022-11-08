import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/img/error/404.png'
import '../../utils/styles/components/error.css'

function Error() {
  return (
    <div className="Majorcontainer">
      <div>
        <img className="ImgError" src={ErrorImg} alt="404" />
      </div>
      <h1 className="TitleEror">
        Oups ! La page que vous demandez n'existe pas.
      </h1>
      <Link className="link" to="/">
        Retrouner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
