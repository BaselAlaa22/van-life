import { Link } from "react-router-dom";

export default function VansGridItem({id, img, name, price, type }) {
  return (
    <Link to={`/vans/${id}`}>
      <div className="vans-grid-item">
        <img className="van-img" src={img} alt={name} />
        <p className="van-name">{name}</p>
        <p className="van-price">
          {`$ ${price}`}
          <span className="price-unit">/day</span>
        </p>
        <p className={`van-type ${type}`}>{type}</p>
      </div>
    </Link>
  );
}
