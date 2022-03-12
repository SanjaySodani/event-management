import { Link } from 'react-router-dom';
import './custom.css';
import { FoodContext } from "../App";
import { useContext } from 'react';

function Navigation(props) {
  const context = useContext(FoodContext);

  return (
    <nav className="pt-2 pb-3 px-2">
      <div className='d-flex justify-content-between'>
        <div className='m-2'>
          <h3 className='text-monospace px-1'>
            <i className='fas fa-calendar-check mr-1'></i>
            <Link to='/' className='text-decoration-none text-secondary'>Event Management</Link>
          </h3>
        </div>
        <div className='m-2'>
          <Link to='/cart' className='text-decoration-none text-secondary'><i className='fas fa-shopping-cart'></i> My cart</Link>
        </div>
      </div>
      <div className='container'>
        <div className="row row-cols-1 justify-content-center my-3">
          <div className='col col-10 col-sm-8'>
            <div className="input-group">
              <div className="input-group-prepend">
                <div className='input-group-text bg-dark text-white border-0'><i className='fas fa-search'></i></div>
              </div>
              <input type="text" onChange={context.handleSearchTextChange} value={context.searchText} 
              className="form-control bg-dark text-white border-0" placeholder="search" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="mx-2 mx-md-3">
          <Link to='/consumables' className='text-dark'>
            <img src={props.categories.Consumables.icon} alt="Consumables" style={{ height: "16px", width: "16px" }}>
            </img> Consumables
          </Link>
        </div>
        <div className="mx-2 mx-md-3">
          <Link to='/decorations' className='text-dark'>
            <img src={props.categories.Decorations.icon} alt="Decorations" style={{ height: "16px", width: "16px" }}>
            </img> Decorations
          </Link>
        </div>
        <div className="mx-2 mx-md-3">
          <Link to='/pizza' className='text-dark'>
            <img src={props.categories.Pizza.icon} alt="Pizza" style={{ height: "16px", width: "16px" }}>
            </img> Pizza
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;