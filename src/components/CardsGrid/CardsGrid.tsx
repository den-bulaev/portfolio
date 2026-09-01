import { v4 as uuidv4 } from "uuid";

import AppCard from "../AppCard/AppCard";

import { IAppCard } from "../AppCard/interfaces";

import "./CardsGrid.scss";

const CardsGrid: React.FC<{ cards: IAppCard[]; isChrome: boolean }> = (
  props,
) => {
  const { cards, isChrome } = props;

  return (
    <section className="main-grid-container">
      {cards.map((card) => {
        const identifier = uuidv4();
        return (
          <AppCard
            {...card}
            identifier={identifier}
            isChrome={isChrome}
            key={identifier}
          />
        );
      })}
    </section>
  );
};

export default CardsGrid;
