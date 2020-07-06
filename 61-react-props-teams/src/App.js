import React, { useState } from "react";
import "./App.css";
import TeamRender from "./components/Team/Team";
//import TeamRender from "./components/Team/Team";

/**
 * Exercise:
 * 
 * 1. Render all players in default column. Column class - "players".
 * 1.1 Layout for player item 
 * <li>
 * 		<span>{player}</span>
		<button>Team 1</button>
		<button>Team 2</button>
	</li>
 * 2. Each player in default column should have button to move to team 1
 * and button to move to team 2
 * 3. Create component <Team /> and pass players from each team to it.
 * 4. Create <Player /> component and inside <Team /> component use it to render
 * each player.
 * 5. When I click on a button to move a player to the selected team, that player 
 * should be removed from the main column and added to the coresponding team.
 * 6. div rendered by <Team/> should have class "team"
 * 7. div rendered by <Player/> should have class "player"
 */

const App = () => {
  const [players, setPlayers] = useState([
    "Tom",
    "Sam",
    "Vasile",
    "Guy",
    "Ben",
    "Daniel",
    "Ed",
    "Alex",
    "Andrew",
    "Mat",
  ]);


  const [team1, setteam1] = useState([])
  const [team2, setteam2] = useState([])

  const removePlayer = (name) => {
    const filterPlayer = players.filter(n => n !== name)
    setPlayers(filterPlayer)
  }


  const clickedTeam1 = (e) => {
    const playerName = e.target.value
    setteam1([...team1, playerName])
    removePlayer(playerName)
  }

  const clickedTeam2 = (e) => {
    const playerName = e.target.value
    setteam2([...team2, playerName])
    removePlayer(playerName)
  }


  return (
    <div className="app">
      <ul className="players">
        {players.map((p, i) => (
          <li className="eachPlayer" key={i}>
            <span>{p}</span>
            <button onClick={clickedTeam1} value={p}>Team 1</button>
            <button onClick={clickedTeam2} value={p} >Team 2</button>
          </li>
        ))}
      </ul>
      <TeamRender players={team1} team="team 1"/>
      <TeamRender players={team2} team="team 2"/>
    </div>
  );
};

export default App;
