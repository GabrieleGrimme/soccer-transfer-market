
import { useState } from 'react';
import styled from 'styled-components';
import Soccerfieldimg from '../src/images/soccerfield.png';

//

//anlegen eines Prototyps, damit alle properties vorhanden sind

function App() {

const initialPlayerState = { 
  name: '',
  price: '',
  free_transfer: false,
  position: '',
  email: '',
};

const [player, setPlayer] = useState([]);
const [allPlayers, setAllPlayers] = useState([]);

function addPlayer(e) {
  e.preventDefault();
  alert(`${player.name} ${player.price}`);
};




  function updatePlayer(event) {
    const fieldName= event.target.name;
    let fieldValue= event.target.value;
  
    if (event.target.type === 'checkbox') { // checkbox übermittelt keinen value, deshalb immer im State speichern
      fieldValue = event.target.checked; // ist true oder false
    }
  
  
    setPlayer({...player, [fieldName]: fieldValue }); // property (key) dynamisch erzeugt, deshalb []
  
    //console.log(event.target.name); // Name des Eingabefeldes
    //console.log(event.target.value); // Wert des Eingabefeldes
  }
  
  // value={player.name} hängt den dynamisch erzeugten value an

  return (
    <div>
      <h1>Add new player:</h1>
      <Form onSubmit={addPlayer}>
        <label>Player Name</label>
          <input 
            type="text" 
            name="name" 
            onChange={updatePlayer} 
            value={player.name} 
          />
        
        <label>Transfer Price</label>
          <input 
            type="text" 
            name="price"  
            onChange={updatePlayer} 
            value={player.price} 
            disabled={player.free_transfer ? true : false }
          />

        <label>On a free transfer</label>
          <input 
            type="checkbox" 
            name="free_transfer"   
            onChange={updatePlayer} 
            value={player.free_transfer}
            disabled={player.price ===' '}
          />

        <label htmlFor="club">Club</label>  
          <select id="club" name="club">
            <option value="select"> ---Please select --- </option>
            <option value="fc_bayern">FC Bayern</option>
            <option value="sv_werder">SV Werder</option>
            <option value="vfb_stuttgart">VFB Stuttgart</option>
            <option value="rb_leipzig">RB Leipzig</option>
            <option value="st_pauli">FC St. Pauli</option>
            <option value="fc_koeln">1. FC Köln</option>
          </select>

          <label htmlFor="position">Position</label>
          <Position>
            <label>
            <input 
              type="radio" 
              value="striker" 
              name="position"  
              onChange={updatePlayer}  
              checked= {player.position === 'striker'}/> {' '} Striker
            </label>
            <label>
            <input 
              type="radio" 
              value="midfield" 
              name="position"   
              onChange={updatePlayer} 
              checked= {player.position === 'midfield'}/> {' '} Midfield
            </label>
            <label>
            <input 
              type="radio" 
              value="defence" 
              name="position"   
              onChange={updatePlayer} 
              checked= {player.position === 'defence'}/> {' '} Defense
            </label>
            <label>
            <input 
              type="radio" 
              value="goalie" 
              name="position"   
              onChange={updatePlayer} 
              checked= {player.position === 'goalie'}/> {' '} Goalie
            </label>
            </Position>

          <label htmlFor="email">Contact</label>
            <input 
              type="text" 
              name="email" />
          <Buttons>
            <Button
              isPrimary 
              type="submit">
                Add player
              </Button>
            <Button onClick={() => setPlayer(initialPlayerState) }
              type="reset">
              Cancel
            </Button>
          </Buttons>
      </Form>
    </div>
  );
}


const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 0 auto;
  
  label {
    font-weight: bold;
    font-size: 20px;
    color: green;
  }

  input,
  select {
    font-size: 1.25rem;
  }

  input[type='checkbox'],
  input[type='radio'] {
    transform: scale()(1.4);
  }
  `;

const Position = styled.section`
  display: flex;
  gap: 1rem;
`;

const Buttons = styled.section`
  background-image: url(${Soccerfieldimg});
  display:flex;
  gap: 1rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 5rem;
  background: white;
  cursor: pointer;
`;

export default App;
