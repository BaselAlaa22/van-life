
import React from "react";
import VansGridItem from "./components/VansGridItem";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

 
  return (
    <section className="vans">
      <header>
        <h1>Explore our van options</h1>
        <div className="vans-filters">
          <button className="filter-btn hover-effect click-effect">Simple</button>
          <button className="filter-btn hover-effect click-effect">Luxury</button>
          <button className="filter-btn hover-effect click-effect">Rugged</button>
          <button className="clear-btn hover-effect click-effect">Clear filters</button>
        </div>
      </header>
      <div className="vans-body">
        {
          vans.map(
            van => {
              return (
                <VansGridItem 
                key={van.id} 
                img={van.imageUrl} 
                {...van}
                />
              )
            }
          )
        }
      </div>
    </section>
  );
}



