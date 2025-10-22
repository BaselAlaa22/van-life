import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState();

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans))
      .catch((e) => console.log(e));
  }, []);

  return van ? (
    <div className="van-detail">
      <Link className="clear-btn" to="/vans">
        <FaArrowLeftLong />
        Back to vans
      </Link>

      <img className="van-detail-img" src={van.imageUrl} alt={van.name} />
      <div className={`van-type ${van.type}`}>{van.type}</div>
      <h1>{van.name}</h1>
      <h2>
        $ {van.price} <span style={{ fontWeight: 500 }}>/day</span>
      </h2>
      <p className="van-description">{van.description}</p>
      <button className="home-link-btn hover-effect click-effect">
        Rent this van
      </button>
    </div>
  ) : (
    <div className="spinner"></div>
  );
}
