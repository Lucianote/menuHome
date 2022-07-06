import { Link } from "react-router-dom"
import "../components/css/Navigation.css"

const Navigation = () => (
    <nav className="BarraPrincipal">
      <Link to="/">|Inicio|</Link>
      <Link to="/home">|Home|</Link>
      <Link to="/login">|Inicio de sesion|</Link>
    </nav>
  )
  export default Navigation