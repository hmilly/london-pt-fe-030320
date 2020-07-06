import React from "react";

const Player = (props) => {
  const { player } = props;

  return (
    <li className="player">{player}
    </li>
  );
}

export default Player;
