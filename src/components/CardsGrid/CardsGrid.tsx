import { v4 as uuidv4 } from "uuid";

import AppCard from "../AppCard/AppCard";

import { IAppCard } from "../AppCard/interfaces";

import "./CardsGrid.scss";

const CardsGrid: React.FC<{ cards: IAppCard[] }> = (props) => {
  const { cards } = props;

  return (
    <section className="main-grid-container">
      {cards.map((card) => {
        return <AppCard {...card} key={uuidv4()} />;
      })}
    </section>
  );
};

export default CardsGrid;
