import React, {useState} from "react";
import "./App.css";

        
         
         
  

const BottomRow = () => {

    const [downScore, setDownScore] = useState(0);  
    const [togoScore, setTogoScore] = useState(0);
    const [ballonScore, setBallonScore] = useState(0);
    const [quarterScore, setQuarterScore] = useState(0);   




  return (

    <div> 
        <div className="bottomRow">
          <div className="down">
            <h3 className="down__title">Down</h3>
            <div className="down__value">{downScore}</div>
          </div>
          <div className="toGo">
            <h3 className="toGo__title">To Go</h3>
            <div className="toGo__value">{togoScore}</div>
          </div>
          <div className="ballOn">
            <h3 className="ballOn__title">Ball on</h3>
            <div className="ballOn__value">{ballonScore}</div>
          </div>
          <div className="quarter">
            <h3 className="quarter__title">Quarter</h3>
            <div className="quarter__value">{quarterScore}</div>
          </div>
        </div>

        <section className="bottomButtons">
        <div className="downButtons">

        <button className="downButtons" onClick={() =>setDownScore(downScore + 1)}>Down + </button>
          <button className="downButtons" onClick={() =>setDownScore(downScore - 1)}>Down - </button>
        </div>
        <div className="togoButtons">
          <button className="togoButtons" onClick={() =>setTogoScore(togoScore + 1)}>To Go + </button>
          <button className="togoButtons" onClick={() =>setTogoScore(togoScore - 1)}>To Go - </button>
        </div>
        <div className="ballonButtons">
          <button className="ballonButtons" onClick={() =>setBallonScore(ballonScore + 1)}>Ball on + </button>
          <button className="ballonButtons" onClick={() =>setBallonScore(ballonScore - 1)}>Ball on - </button>
        </div>
        <div className="quarterButtons">
          <button className="quarterButtons" onClick={() =>setQuarterScore(quarterScore + 1)}>Quarter + </button>
          <button className="quarterButtons" onClick={() =>setQuarterScore(quarterScore - 1)}>Quarter - </button>
        </div>
        </section>
        
  </div>
  );
};

export default BottomRow;


