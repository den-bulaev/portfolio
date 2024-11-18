import { appCards } from "./utils";
import CardsGrid from "./components/CardsGrid/CardsGrid";

function App() {
  return (
    <main>
      <h1>Portfolio</h1>
      <CardsGrid cards={appCards} />
    </main>
  );
}

export default App;
