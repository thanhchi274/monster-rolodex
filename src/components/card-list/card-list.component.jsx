import React from "react";
import {Card} from '../card/card.component'
import './card-list.styles.css'
export const CardList = props => {
          let monster = props.monster
  return <div className="card-list">
     {
          monster.map(monster => (
          <Card key={monster.id} monster={monster}/>
          ))
        }
  </div>;
};
