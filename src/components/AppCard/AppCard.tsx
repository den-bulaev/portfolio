import { IAppCard } from "./interfaces";

import "./AppCard.scss";

const AppCard: React.FC<IAppCard> = (props) => {
  const { image, title, stack, linkToCode, linkToDemo } = props;

  return (
    <div className="app-card">
      <picture className="app-card_preview">
        <img className="app-card_image" src={image} alt={title} />
      </picture>

      <h4 className="app-card_title">{title}</h4>

      <div className="app-card_link-container">
        <a href={linkToDemo} target="_blank">
          View Demo
        </a>
        <a href={linkToCode} target="_blank">
          View Code
        </a>
      </div>

      <span className="app-card_stack">{stack}</span>
    </div>
  );
};

export default AppCard;
