import { FoodContext } from "../App";
import { useContext } from 'react';

function OrderSummary() {
  const context = useContext(FoodContext);
  return (
    <div className="container my-4">
      <h4 className="text-monospace my-3">Order Summary</h4>
      {context.myCart.map((product, index) => {
        return (<div key={product.foodid} className="row row-cols-4 my-4">
          <div className="col col-1">{index + 1}</div>
          <div className="col col-6 col-md-4">{product.foodname}</div>
          <div className="col col-2">${product.price}</div>
          <div className="col col-1"><button type="button" className="btn btn-sm btn-danger" onClick={() => { context.removeFromCart(product) }}>
            <i className="fas fa-times"></i></button>
          </div>
        </div>)
      })}
      <div className="my-4">
        <h4 className="text-monospace">User details</h4>
        <p className="my-0">{context.user.name}</p>
        <p className="my-0">{context.user.address}</p>
        <p className="my-0">{context.user.contact}</p>
        <p className="my-0">{context.user.email}</p>
      </div>
      <div className="form-group my-4">
        <label htmlFor="paymentMethod"><h4 className="text-monospace">Choose a payment method</h4></label>
        <select id="paymentMethod" className="form-control">
          <option value="">select</option>
          <option value="cc">Credit Card</option>
          <option value="dc">Debit Card</option>
        </select>
        <button type="button" className="btn btn-lg btn-primary my-2">Pay</button>
      </div>
    </div>
  )
}

export default OrderSummary