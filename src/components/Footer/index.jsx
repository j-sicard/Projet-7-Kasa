import FooterIcon from '../../assets/img/footer/LOGO.png'
import '../../utils/styles/components/footer.css'

function Footer() {
  return (
    <div className="FooterContainer">
      <img className="FooterImage" src={FooterIcon} alt="icon  Kasa" />
      <p className="FooterMessage">© 2020 Kasa Allrights reserved</p>
    </div>
  )
}

export default Footer
