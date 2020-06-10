import React from "react";
import Player from "./Player/Player"

const TeamRender = (props) => {
  const { players, team } = props;

  return (
    <div className="team">{team}
      <ul className={team}>
        {players.map((p, i) => <Player player={p} key={i} />)}
      </ul>
    </div>
  );
};

export default TeamRender

