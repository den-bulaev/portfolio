import { v4 as uuidv4 } from "uuid";

import AppCard from "../AppCard/AppCard";

import { IAppCard } from "../AppCard/interfaces";

import "./CardsGrid.scss";

const CardsGrid: React.FC<{ cards: IAppCard[] }> = (props) => {
  const { cards } = props;

  return (
    <section className="main-grid-container">
      {cards.map((card) => {
        const identifier = uuidv4();
        return <AppCard {...card} identifier={identifier} key={identifier} />;
      })}
    </section>
  );
};

export default CardsGrid;
