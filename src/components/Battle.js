import { useState } from "react";

export default function Battle() {
  const [players, setPlayers] = useState({ playerOne: "", playerTwo: "" });
  const [playersData, setPlayersData] = useState({
    playerOne: null,
    playerTwo: null
  });

  async function fetchUserData(username) {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    return data;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    switch (event.target.id) {
      case "formOne":
        setPlayersData({
          ...playersData,
          playerOne: await fetchUserData(players.playerOne)
        });
        break;
      case "formTwo":
        setPlayersData({
          ...playersData,
          playerTwo: await fetchUserData(players.playerTwo)
        });
        break;
      default:
        break;
    }
  }

  function handleReset(value){
    switch (value) {
      case "playerOne":
        setPlayersData({
          ...playersData,
          playerOne: null
        });
        setPlayers({
          ...players,
          playerOne: ''
        })
        break;
      case "playerTwo":
        setPlayersData({
          ...playersData,
          playerTwo: null
        });
        setPlayers({
          ...players,
          playerTwo: ''
        })
        break;
      default:
        break;
    }
  }

  function handleChange({ target }) {
    switch (target.name) {
      case "playerOne":
        setPlayers({ ...players, playerOne: target.value });
        break;
      case "playerTwo":
        setPlayers({ ...players, playerTwo: target.value });
        break;
      default:
        break;
    }
  }

  return (
    <div className="container">
      <h1 className="text-xlg text-center">Instructions</h1>
      <BattleHero />
      <BattleForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        playersData={playersData}
        handleReset={handleReset}
      />
    </div>
  );
}

function BattleHero() {
  return (
    <section className="battle-hero">
      <div className="container flex battle-hero-container">
        <article className="battle-hero-card flex">
          <h3 className="text-md">Enter Two Github Users</h3>
          <i className="battle-icon fas fa-user-friends"></i>
        </article>
        <article className="battle-hero-card flex">
          <h3 className="text-md">Battle</h3>
          <i className="battle-icon fas fa-fighter-jet"></i>
        </article>
        <article className="battle-hero-card flex">
          <h3 className="text-md">See The Winner</h3>
          <i className="battle-icon fas fa-trophy"></i>
        </article>
      </div>
    </section>
  );
}

function BattleForm(props) {
  return (
    <section className="battle-form-container container">
      <h3 className="text-xlg text-center">Players</h3>
      <div className="battle-form-div flex">
        {!props.playersData.playerOne ? (
          <form
            className="battle-form"
            id="formOne"
            onSubmit={props.handleSubmit}
          >
            <div className="container flex">
              <label className="form-label text-md flex">
                Player One
                <input
                  name="playerOne"
                  type="text"
                  placeholder="Github Username"
                  className="form-control"
                  value={props.playerOne}
                  onChange={props.handleChange}
                />
              </label>
              <input type="submit" value="Submit" className="submit-btn" />
            </div>
          </form>
        ) : (
          <div className="flex battle-user-container">
            <img src={props.playersData.playerOne.avatar_url} className="battle-avatar" />
            <h5 className="text-md text-bold">{props.playersData.playerOne.login}</h5>
            <span className="cross-btn text-lg text-bold" onClick={() => props.handleReset('playerOne')}>x</span>
          </div>
        )}
        {!props.playersData.playerTwo ? (
          <form
            className="battle-form"
            id="formTwo"
            onSubmit={props.handleSubmit}
          >
            <div className="container flex">
              <label className="form-label text-md flex">
                Player Two
                <input
                  name="playerTwo"
                  type="text"
                  placeholder="Github Username"
                  className="form-control"
                  value={props.playerTwo}
                  onChange={props.handleChange}
                />
              </label>
              <input type="submit" value="Submit" className="submit-btn" />
            </div>
          </form>
        ) : (
          <div className="flex battle-user-container">
            <img src={props.playersData.playerTwo.avatar_url} className="battle-avatar" />
            <h5 className="text-md text-bold">{props.playersData.playerTwo.login}</h5>
            <span className="cross-btn text-lg text-bold" onClick={() => props.handleReset('playerTwo')}>x</span>
          </div>
        )}
      </div>
    </section>
  );
}
