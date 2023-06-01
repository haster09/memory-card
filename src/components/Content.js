import React, { useState } from "react";
import '../style/content.css'
import Card from "./Card";

let used = [];

const Content = () => {
  const [ count, setCount ] = useState(0);
  const [ highest, setHighest ] = useState(0);


  const importAll = (r) => {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')]
  = r(item);
  });
  return images;
  }
  const images = importAll(require.context('../style/images', false, /[0-9]/))
  const numbers = [...Array(16).keys()];
  const shuffledNumbers = numbers.sort((a,b) => 0.5 - Math.random())
  const cards = [];
  let j = 0;

  const randomize = () => {
    for (let i = 0; i < 16; i++) {
    cards.push(<Card key={i} id={shuffledNumbers[j++]} change={change}/>)
    }
  }

  const change = (e) => {
    const cards = document.querySelectorAll('.card');
    const shuffledNumbers = numbers.sort((a,b) => 0.5 - Math.random())
    let i = 0;
    for (let card of cards) {
      card.src = images[`${shuffledNumbers[i++]}.jpg`];
    }
    if (!used.includes(e.target.id)) {
      setCount(count + 1);
    } else {
      if (count > highest) {
        setHighest(count);
      }
      setCount(0);
      used = [];
    }
    used.push(e.target.id);
  }

  return (
    <div onLoad={randomize()} className="content">
      <div className="cards">
        {cards}
      </div>
      <div className="scores">
        <div className="score">Current score: {count}</div>
        <div className="highest">Highest score: {highest}</div>
      </div>
    </div>
  )
}

export default Content;