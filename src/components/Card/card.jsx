import '../../utils/styles/components/card.css'

function Card({ title, cover }) {
  return (
    <div className="card">
      <h2 className="ProductTitle">{title}</h2>
      <img className="Product_Pick" src={cover} alt="" />
    </div>
  )
}

export default Card
