import '../../utils/styles/pages/home.css'
import ImgHomeBanner from '../../assets/img/home/home-banner.png'
import Products from '../../assets/api/logements.json'
import Card from '../../components/Card/card'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="MajorContainer">
      <div className="BannerContainer">
        <img
          className="HomeBanner"
          src={ImgHomeBanner}
          alt="Bannier de la page d'accueil."
        />
        <h1 className="HomeTitle"> Chez vous, partout et ailleurs</h1>
      </div>
      <div className="Section">
        {Products.map((Product) => {
          return (
            <Link key={Product.id} to={'/singleproduct/' + Product.id + '/#'}>
              <Card title={Product.title} cover={Product.cover} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Home
