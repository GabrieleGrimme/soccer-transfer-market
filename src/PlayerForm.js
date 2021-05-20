import styled from 'styled-components/macro';
import { useState } from 'react';
import Tags from './Tags';
import validatePlayer from './lib/validations';

//import Soccerfieldimg from '../src/images/soccerfield.png';

export default function PlayerForm({ onAddPlayer }) {

const initialPlayerState = { //anlegen eines Prototyps für alle properties (key)
    name: '',
    price: '',
    free_transfer: false,
    position: '',
    email: '',
    club: '',
    skills: []
  };
  
  const [player, setPlayer] = useState(initialPlayerState);
  const [isError, setIsError] = useState(false);

    function updatePlayer(event) {
        const fieldName = event.target.name;
        let fieldValue = event.target.value;
  
  
        if (event.target.type === 'checkbox') { // checkbox übermittelt keinen value, deshalb immer im State speichern
            fieldValue = event.target.checked; // ist true oder false
    }

    setPlayer({...player, [fieldName]: fieldValue }); // property (key) dynamisch erzeugt, deshalb []
    
  }

  function updateSkills(skillsToAdd) {
    setPlayer({...player, skills: [...player.skills, skillsToAdd]});
    //setSkills([...skills, newSkill.toUpperCase()]); (vorher)
  }
  
  function deleteSkill(skillToDelete) {
    const skillsToKeep = player.skills.filter((skill) => skill !== skillToDelete);
    setPlayer({...player, skills: skillsToKeep});
  }

  function handleFormSubmit(event) {
      event.preventDefault();

    if (validatePlayer(player)) {
      onAddPlayer(player);
      setPlayer(initialPlayerState); // Formular nach submit zurück auf Ausgangszustand setzen
      setIsError(false); // s. error-state -- wenn kein Fehler -> submit
    } else {
      setIsError(true); // s. error-state -- wenn Fehler -> wirf Fehlermeldung aus errorBox
    }
  } 
  
return (

<Form onSubmit={handleFormSubmit}>
    <h2>Add a new Player</h2>
      {isError && <ErrorBox>You've got something wrong! Check your form!</ErrorBox>}
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
            disabled={player.price !==''}
          />

        <label htmlFor="club">Club</label>  
          <select 
            id="club" 
            name="club"  
            onChange={updatePlayer} 
            value={player.club} >
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

            <Tags
              tags={player.skills}
              onUpdateTags={updateSkills}
              onDeleteTag={deleteSkill}
        />

          <label htmlFor="email">Contact</label>
            <input 
              type="text" 
              name="email" 
              value={player.email}
              onChange={updatePlayer} />
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
);
}

const Form = styled.form`
background: white;
display: grid;
gap: 0.5rem;
margin: 0 auto;

label {
  font-weight: bold;
  font-size: 20px;
  color: green;
  padding-top: 5px;
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
display:flex;
gap: 1rem;
padding: 0.5rem;
`;

const Button = styled.button`
border-radius: 5rem;
border: 1px solid green;
background: white;
cursor: pointer;
padding: 0.2rem;
`;

const ErrorBox = styled.div`
  background: red;
  border-radius: 0.5rem;
  color: ivory;
  font-weight: bolder;
  padding: 1rem;
`;
