import { FoodContext } from "../App";
import { useContext } from 'react';

function Consumables() {
  const context = useContext(FoodContext);
  let consumables = context.consumable;
  return (
    <div className="container my-4">
      <h4 className="text-monospace my-3">Consumables</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {consumables.map((product) => {
          return (<div className="col my-3" key={product.foodid}>
            <div className="card shadow">
              <img className='card-img-top border-bottom' src={product.imageurl} />
              <div className='card-body'>
                <div className='d-flex justify-content-between'>
                  <h6 className='card-title'>{product.foodname}</h6>
                  <h6>${product.price}</h6>
                </div>
                <div className='d-flex justify-content-between'>
                  <button type="button" className='btn btn-sm btn-primary' onClick={() => { context.addToCart(product) }}>Add to cart</button>
                  <button className='badge badge-info' disabled>{product.category}</button>
                </div>
              </div>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}

export default Consumables