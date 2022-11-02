import '../../utils/styles/pages/home.css'
import ImgHomeBanner from '../../assets/img/home/home-banner.png'
import Products from '../../assets/api/logements.json'

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
        {Products.map((product) => {
          return (
            <div className="Card">
              <h2 className="ProductTitle">{product.title}</h2>
              <img className="Product_Pick" src={product.cover} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
