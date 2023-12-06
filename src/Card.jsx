import "./App.jsx";
import './Card.css'

function Card() {

    return (
        <>
    <div>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid d-flex justify-content-center mb-3">
    <a className="navbar-brand" href="#">
      <img src="public/img/logo.png" alt="logo" height="120"/>
    </a>
  </div>

  <div className="container-fluid d-flex justify-content-center">
    <ul className="nav ">
      <li className="nav-item">
        <button className="btn btn-outline-success mx-2" type="button">Información</button>
      </li>
      <li className="nav-item">
        <button className="btn btn-outline-success mx-2" type="button">Cómic</button>
      </li>
      <li className="nav-item">
        <button className="btn btn-outline-success mx-2" type="button">Público objetivo</button>
      </li>
      <li className="nav-item">
        <button className="btn btn-outline-success mx-2" type="button">Contáctos</button>
      </li>
    </ul>
  </div>
</nav>
      </div>
   
        </>
    );
}

export default Card;
