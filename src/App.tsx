import { useEffect, useState } from "react";

import CardsGrid from "./components/CardsGrid/CardsGrid";
import { appCards, appCardsChrome, ESiteVersion, getVersion } from "./utils";

function App() {
  const [siteVersion, setSiteVersion] = useState("");

  useEffect(() => {
    const version = getVersion();

    if (version === ESiteVersion.CHROME) {
      setSiteVersion(version);
    }
  }, []);

  return (
    <main>
      <h1>
        {siteVersion === ESiteVersion.CHROME
          ? "Web Store Portfolio"
          : "Portfolio"}
      </h1>
      <CardsGrid
        cards={siteVersion === ESiteVersion.CHROME ? appCardsChrome : appCards}
      />
    </main>
  );
}

export default App;
