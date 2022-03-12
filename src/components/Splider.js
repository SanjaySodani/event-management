import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { useState } from 'react';

function Splider(props) {
  const [page, setPage] = useState(getWidth());

  function getWidth() {
    if (window.innerWidth < 576) return 1;
    else if (window.innerWidth > 575 && window.innerWidth < 951) return 2;
    else return 3;
  }

  window.addEventListener('resize', () => {
    let temp = getWidth();
    setPage(temp);
  })

  return (
    <Splide options={{
      perPage: page,
      arrows: false,
      pagination: false,
      drag: "free",
      gap: "4rem"
    }}>
      {props.products.map((product) => {
        return (<SplideSlide key={product.foodid}>
          <div className='card shadow mt-3 mb-4'>
            <img className='card-img-top border-bottom' src={product.imageurl} />
            <div className='card-body'>
              <div className='d-flex justify-content-between'>
                <h6 className='card-title'>{product.foodname}</h6>
                <h6>${product.price}</h6>
              </div>
              <div className='d-flex justify-content-between'>
                <button type="button" className='btn btn-sm btn-primary' onClick={() => { props.addToCart(product) }}>Add to cart</button>
                <button className='badge badge-info' disabled>{product.category}</button>
              </div>
            </div>
          </div>
        </SplideSlide>)
      })}
    </Splide>
  )
}

export default Splider;