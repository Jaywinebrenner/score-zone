import React from 'react';
import Header from './Header'
import Player from './Player'
import AddPlayerForm from './AddPlayerForm'

class App extends React.Component {
  state = {
    players: [
      {
        name: "Clanker",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Head Ache",
        score: 0,
        id: 3
      },
      {
        name: "Donko",
        score: 0,
        id: 4
      }
    ]
  };

handleScoreChange = (index, delta) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += delta
    }));
  }

  handleAddPlayer = (name) => {
    this.setState( prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    });
  }

  // ALTERNATE WAY TO UPDATE HANDLEADDPLAYER USING CONCAT
//   handleAddPlayer = (name) => {
//   let newPlayer = {
//     name,
//     score: 0,
//     id: this.prevPlayerId += 1
//   };
//   this.setState( prevState => ({
//     players: prevState.players.concat(newPlayer)
//   }));
// }

prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={this.state.players}
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player
            score={player.score}
            name={player.name}
            id={player.id}
            key={player.id.toString()}
            index={index}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        )}
        <AddPlayerForm
          addPlayer={this.handleAddPlayer}
          />
      </div>
    );
  }
}

export default App;
