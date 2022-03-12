import { FoodContext } from "../App";
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const context = useContext(FoodContext);

  return (
    <div className="container mt-4 mb-5">
      <h4><i className="fas fa-shopping-cart mb-4"></i> My cart</h4>
      {context.myCart.map((product, index) => {
        return (<div key={product.foodid} className="row row-cols-4 my-2">
          <div className="col col-1">{index + 1}</div>
          <div className="col col-6 col-md-4">{product.foodname}</div>
          <div className="col col-2">${product.price}</div>
          <div className="col col-1"><button type="button" className="btn btn-sm btn-danger" onClick={() => { context.removeFromCart(product) }}>
            <i className="fas fa-times"></i></button>
          </div>
        </div>)
      })}
      {context.totalPrice === 0 ? null :
        <div className="my-3"><h5 className="text-monospace">
          Total price: ${context.totalPrice}
        </h5>
          <Link to='/checkout' className='btn btn-lg btn-primary my-3'>Checkout</Link>
        </div>
      }
    </div>
  )
}

export default Cart;