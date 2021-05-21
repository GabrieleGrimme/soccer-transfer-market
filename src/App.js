//console.log(event.target.name); // Name des Eingabefeldes
//console.log(event.target.value); // Wert des Eingabefeldes
// value={player.name} hängt den dynamisch erzeugten value an

import { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import PlayerForm from './PlayerForm';
import PlayerCard from './PlayerCard';
import ShoppingCart from './ShoppingCart';

import { NavLink, Switch, Route } from "react-router-dom";
//import HeaderNavigation from "./HeaderNavigation";

import { saveToLocal, loadFromLocal } from './lib/localStorage';

function App() {

  const [players, setPlayers] = useState(loadFromLocal('players') ?? []); // nullish coalescing operator
  const [shoppingCart, setShoppingCart] = useState(loadFromLocal('shoppingCart') ?? []);
  // falls Inhalt im localStorage ist, lade ihn in den useState des players bzw. shoppingCart


  useEffect(() => {
    saveToLocal('players', players); // Hook, func Aufruf zum Speichern in den LocalStorage
    }, [players]);

  useEffect(() => {
    saveToLocal('shoppingCart', shoppingCart);
  }, [shoppingCart]);

  function addPlayer(player) {
    setPlayers([...players, player]); // die Formulareingaben werden hier hineingeschoben
  }

  function addToShoppingCart(player) {
    setShoppingCart([...shoppingCart, player]);
  }

  return (
    <div>
      <Header>
        <NavLink to="/shoppingcart">
          <Button> Go to selected Player! </Button>
        </NavLink>
        <NavLink exact to="/">
          <h1>German Soccer Transfer:</h1>
        </NavLink>
        
      </Header>

      <Switch>
        <Route exact path="/">
      <Grid>
          <PlayerForm onAddPlayer={addPlayer}/>
            <Players>
              {players.map((player) => (
                <PlayerCard player={player} onAddToCart={addToShoppingCart}/>
              ))}
            </Players>
          </Grid>
        </Route>
        <Route>
          <ShoppingCart playersInShoppingCart={shoppingCart}/>
        </Route>
      </Switch>
    </div>
  );
}

const Header = styled.header`
  display: grid;
  grid-template-rows: 1fr;
  gap: 1rem;
  `;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 576px) {
    grid-template-columns: 1fr 2fr;
  }
`;

const Players = styled.div`
  display:flex;
  flex-wrap: wrap;;
  gap: 0.5rem;
`;
const Button = styled.button`
padding: 0.5rem;
border-radius: 5rem;
border: 1px solid green;
background: white;
cursor: pointer;
`;

export default App;
