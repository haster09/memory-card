import React from "react";
import '../style/card.css'

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => { images[item.replace('./', '')]
= r(item);
});
return images;
}

const images = importAll(require.context('../style/images', false, /[0-9]/))

const Card = ({id, change}) => {
  return (
    <img className="card" onClick={change} id={id} src={images[`${id}.jpg`]} style={{width: '100%'}} alt={'champion'}></img>
  )
}

export default Card