import { useEffect, useRef, useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

import { IAppCard } from "./interfaces";

import "./AppCard.scss";

const AppCard: React.FC<IAppCard & { identifier: string }> = (props) => {
  const { image, title, stack, linkToCode, linkToDemo, identifier } = props;
  const stackRef = useRef<HTMLElement | null>(null);
  const [isTooltip, setIsTooltip] = useState(false);

  useEffect(() => {
    if (
      stackRef.current &&
      stackRef.current.scrollWidth > stackRef.current.clientWidth
    ) {
      setIsTooltip(true);
    }

  }, [stackRef.current]);

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

      <span
        ref={stackRef}
        className={`app-card_stack${isTooltip ? " cursor-pointer" : ""}`}
        data-tooltip-id={`stack-tooltip-${identifier}`}
      >
        {stack}
      </span>
      {isTooltip && (
        <ReactTooltip
          className="app-card_tooltip"
          id={`stack-tooltip-${identifier}`}
          place="bottom"
          content={stack}
        />
      )}
    </div>
  );
};

export default AppCard;
