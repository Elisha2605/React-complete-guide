import React, { useState } from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {

  const [movie, setMovie] = useState([])

  function fetchData() {
    fetch("https://swapi.dev/api/films")
    .then((response) => {
      return response.json()
    })
    .then((data) =>  {
      const newData = data.results.map(el => {
        return {
          title: el.title,
          episode: el.episode_id,
          director: el.director
        }
      })
      setMovie(newData);
    })
  }
  fetchData();
  console.log(movie);

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
