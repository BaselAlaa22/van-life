export default function VansGridItem({img,name,price,type}){
    return (
        <div className="vans-grid-item">
            <img className="van-img" src={img} alt={name}/>
            <p className="van-name">{name}</p>
            <p className="van-price">{`$ ${price}`}<span>/day</span></p>
            <p className={`van-type ${type}`}>{type}</p>
        </div>
    )
}