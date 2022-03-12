import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Consumables from './components/Consumables';
import Decorations from './components/Decorations';
import Pizza from './components/Pizza';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import OrderSummary from './components/OrderSummary';
export const FoodContext = React.createContext();

function App() {
  const foodURL = "https://smartqdemo.firebaseio.com/events-data.json";
  const [data, setData] = useState({ isNull: true });
  const [consumable, setConsumable] = useState([]);
  const [decoration, setDecoration] = useState([]);
  const [pizza, setPizza] = useState([]);
  const [myCart, setMyCart] = useState([]);
  const [originalItems, setOriginalItems] = useState({});
  const [searchText, setSearchText] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState({isNull: true});

  const getData = async () => {
    axios.get(foodURL).then((res) => {
      let temp = res.data;
      setData(temp);
      let tempCosumables = [];
      let tempDecorations = [];
      let tempPizzas = [];
      for (let product of temp.menu) {
        if (product.category === "Pizza") {
          tempPizzas.push(product);
        } else if (product.category === "Consumables") {
          tempCosumables.push(product);
        } else if (product.category === "Decorations") {
          tempDecorations.push(product);
        }
      }
      setConsumable(tempCosumables);
      setDecoration(tempDecorations);
      setPizza(tempPizzas);
      setOriginalItems({
        consumable: tempCosumables,
        decoration: tempDecorations,
        pizza: tempPizzas
      })
    });
  }

  const handleSearchTextChange = (event) => {
    let text = event.target.value.toLowerCase();
    if (text === "") {
      setConsumable(originalItems.consumable);
      setDecoration(originalItems.decoration);
      setPizza(originalItems.pizza);
    } else {
      let tempCosumables = [];
      let tempDecorations = [];
      let tempPizzas = [];
      for (let product of data.menu) {
        if (product.foodname.toLowerCase().includes(text)) {
          if (product.category === "Pizza") {
            tempPizzas.push(product);
          } else if (product.category === "Consumables") {
            tempCosumables.push(product);
          } else if (product.category === "Decorations") {
            tempDecorations.push(product);
          }
        }
      }
      setConsumable(tempCosumables);
      setDecoration(tempDecorations);
      setPizza(tempPizzas);
    }
    setSearchText(text);
  }

  const addToCart = (product) => {
    let cart = myCart;
    cart.push(product);
    setMyCart(cart);
    setTotalPrice((prev)=>{
      return prev + product.price;
    })
  }

  const removeFromCart = (product) => {
    let cart = myCart;
    for (let i=0; i<myCart.length; i++) {
      if (cart[i].foodid === product.foodid) {
        cart.splice(i,1);
      }
    }
    setMyCart(cart);
    setTotalPrice((prev)=>{
      return prev - product.price;
    })
  }

  const submitUserDetails = (user) => {
    setUser({
      name: user.name,
      address: user.address,
      contact: user.contact,
      email: user.email
    });
  }

  useEffect(() => {
    getData();
  }, []);

  if (data.isNull) return null;

  return (
    <BrowserRouter>
      <FoodContext.Provider value={{ data, myCart, setMyCart, consumable, decoration, pizza, originalItems, addToCart, searchText, handleSearchTextChange, removeFromCart, totalPrice, submitUserDetails, user }}>
        <Navigation categories={data.extras.categories} />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/consumables' element={<Consumables />} />
          <Route exact path='/decorations' element={<Decorations />} />
          <Route exact path='/pizza' element={<Pizza />} />
          <Route exact path='/cart' element={<Cart />} />
          <Route exact path='/checkout' element={<CheckOut />} />
          <Route exact path='/order-summary' element={<OrderSummary />} />
        </Routes>
      </FoodContext.Provider>
    </BrowserRouter>
  );
}

export default App;