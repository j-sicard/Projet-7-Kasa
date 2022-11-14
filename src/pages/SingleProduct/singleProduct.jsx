import { useParams } from 'react-router-dom'
import Error404 from '../../components/Error/error'
import ListeLogements from '../../assets/api/logements.json'
import '../../utils/styles/pages/singleProduct.css'
import Dropdown from '../../components/Dropdown/Dropdown'
import star from '../../assets/img/singleproduct/stars/star.png'
import emptyStar from '../../assets/img/singleproduct/stars/empty_star.png'
import Carrousel from '../../components/Carrousel/carrousel'

function SingleProduct() {
  const { id } = useParams()

  const SingleProduct = ListeLogements.find((logement) => logement.id === id)

  const tagsLogement = SingleProduct?.tags.map((tags, index) => {
    return <p key={index}>{tags}</p>
  })

  const Equipements = SingleProduct?.equipments.map((equipment, index) => {
    return <p key={index}>{equipment}</p>
  })

  return (
    <>
      {SingleProduct ? (
        <div className="main">
          <div className="carouselle">
            <Carrousel images={SingleProduct?.pictures} />
          </div>

          <div className="info_Product">
            <div className="decription_and_tags">
              <div className="description">
                <h1>{SingleProduct.title}</h1>
                <h2>{SingleProduct.location}</h2>
              </div>
              <div className="info_tag">
                <div className="tags">{tagsLogement}</div>
              </div>
            </div>
            <div className="owner_and_starts">
              <div className="owner">
                <p>{SingleProduct.host.name}</p>
                <img
                  className="pic_owner"
                  src={SingleProduct.host.picture}
                  alt="Portait du propriétaire du bien"
                />
              </div>
              <div className="stars">{showStars(SingleProduct.rating)}</div>
            </div>
          </div>
          <div className="dropdown_section">
            <div className="dropdown_box">
              <Dropdown
                titre="Description"
                description={SingleProduct.description}
              />
            </div>
            <div className="dropdown_box">
              <Dropdown titre="Equipements" description={Equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Error404 />
      )}
    </>
  )
}

export default SingleProduct

function showStars(rating) {
  let noteLogement = []

  for (let fullStars = 0; fullStars < 5; fullStars++) {
    if (fullStars < rating)
      noteLogement.push(
        <img key={fullStars} className="star" src={star} alt="" />
      )
    else {
      noteLogement.push(
        <img key={fullStars} className="star" src={emptyStar} alt="" />
      )
    }
  }

  return noteLogement
}
