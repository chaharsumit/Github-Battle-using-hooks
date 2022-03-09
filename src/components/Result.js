import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom"

export default function Result(){  
  let [searchParams] = useSearchParams();
  let [playersData, setPlayersData] = useState({playerOne: null, playerTwo: null});
  let [winner, setWinner] = useState(null);
  let [score, setScore] = useState({ p1_score: null, p2_score: null });

  function decideWinner(){
    let p1_score = (playersData.playerOne.followers * 20) + playersData.playerOne.public_repos;
    let p2_score = (playersData.playerTwo.followers * 20) + playersData.playerTwo.public_repos;
    setScore({...score, p1_score: p1_score, p2_score: p2_score});
    p1_score > p2_score ? setWinner('playerOne') : setWinner('playerTwo');
  }

  useEffect(() => {
    async function fetchUserData(username) {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      return data;
    }
    async function initializeData(){
      setPlayersData({
        ...playersData,
        playerOne: await fetchUserData(searchParams.get('playerOne')),
        playerTwo: await fetchUserData(searchParams.get('playerTwo'))
      });
    }
    initializeData();
  }, [searchParams]);


  if(!playersData.playerOne || !playersData.playerTwo){
    return <p>loading...</p>;
  }else{
    return (
      <ResultBody playerOne={playersData.playerOne} playerTwo={playersData.playerTwo} winner={winner} decideWinner={decideWinner} score={score} />
    )
  }
}

function ResultBody(props){
  let arr = [props.playerOne, props.playerTwo];
  useEffect(() => {
    props.decideWinner();
  }, [props.winner])

  if(!props.winner){
    return <p className="text-lg text-center">battling...</p>
  }else{
    return (
      <>
        <h1 className="text-xlg text-center">Result</h1>
        <ResultCard arr={arr} winner={props.winner} score={props.score} />
      </>
    )
  } 
}

function ResultCard(props){
  let arr = props.winner === 'playerOne' ? props.arr : props.arr.reverse();
  return (
    <>
      <div className="container flex result-container">
        <article className="user-result-card flex text-center">
          <h2 className="text-lg">Winner</h2>  
          <img src={arr[0].avatar_url} width='200'/>
          <p>Score: {props.score.p1_score > props.score.p2_score ? props.score.p1_score : props.score.p2_score}</p>
          <h3 className="text-lg text-danger">{arr[0].login}</h3>
        </article>
        <article className="user-result-card flex text-center">
          <h2 className="text-lg">Loser</h2> 
          <img src={arr[1].avatar_url} width='200'/>
          <p>Score: {props.score.p1_score < props.score.p2_score ? props.score.p1_score : props.score.p2_score}</p>
          <h3 className="text-lg text-danger">{arr[1].login}</h3>
        </article>
      </div>
      <button className="battle-btn text-md">
        <Link to='/battle' className="link">
          Reset
        </Link>
      </button>
    </>
  )
}