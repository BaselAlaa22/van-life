import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about">
      <img src="./about.png" alt="People traveling in a van - About Us" />

      <div className="about-body">
        <h1 className="about-title">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about-description">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉) Our
          team is full of vanlife enthusiasts who know firsthand the magic of
          touring the world on 4 wheels.
        </p>
        <div className="about-explore">
          <h2 className="about-explore-title">
            Your destination is waiting.
            <br /> Your van is ready.
          </h2>
          <Link to="/vans" className="link-btn hover-effect click-effect">
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  );
}
