import profilePhoto from "../Profile-Photo-Ben-Cha.jpg"
import "./Home.css";

export default function Home () {
  return (
    <div className="container-fluid home-container">
      <div className="row align-items-center">
        <img
          src={profilePhoto}
          alt="Ben Cha Profile Photo"
          className="home-img col-3 offset-2"
        ></img>
        <div className="col-6 ps-5">
          <p>Hi there! <span className="hand">👋🏻</span></p>
          <p>My name is <span className="name">Ben Cha</span></p>
          <p>I'm a budding web developer  <span className="grow">🌱</span></p>
        </div>
      </div>
    </div>
  )
}