import { FoodContext } from "../App";
import { useContext } from 'react';
import Splider from "./Splider";

function Home() {
  const context = useContext(FoodContext);

  return (
    <div className="container mt-4 mb-5">
      <div className="row row-cols-1 justify-content-center py-3">
        <div className="col col-8 col-sm-12">
          <h4 className="text-monospace my-3">
            <img src={context.data.extras.categories.Consumables.icon} alt="Consumables" className="mr-1" style={{ height: "18px", width: "18px" }}>
            </img>
            Consumables</h4>
          <Splider products={context.consumable} addToCart={context.addToCart} />
        </div>
      </div>
      <div className="row row-cols-1 justify-content-center py-3">
        <div className="col col-8 col-sm-12">
          <h4 className="text-monospace my-3">
          <img src={context.data.extras.categories.Decorations.icon} alt="Decorations" className="mr-1" style={{ height: "18px", width: "18px" }}>
            </img>
            Decorations</h4>
          <Splider products={context.decoration} addToCart={context.addToCart} />
        </div>
      </div>
      <div className="row row-cols-1 justify-content-center py-3">
        <div className="col col-8 col-sm-12">
          <h4 className="text-monospace my-3">
          <img src={context.data.extras.categories.Pizza.icon} alt="Pizza" className="mr-1" style={{ height: "18px", width: "18px" }}>
            </img>
            Pizza</h4>
          <Splider products={context.pizza} addToCart={context.addToCart} />
        </div>
      </div>
    </div>
  )
}

export default Home;