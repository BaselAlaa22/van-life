import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">
        You got the travel plans, we got the travel vans.
      </h1>
      <p className="home-subtitle">
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <Link to="/vans" className="link-btn">
        Find your van
      </Link>
    </div>
  );
}
