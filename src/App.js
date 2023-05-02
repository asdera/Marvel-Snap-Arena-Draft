import logo from "./logo.svg";
import "./App.css";
import * as data from "./marvel_snap_cards.json";
import Drafter from "./components/drafter";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback, createContext } from "react";

export const ParticleContext = createContext();

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <ParticleContext.Provider
      value={{ init: particlesInit, loaded: particlesLoaded }}
    >
      <div className="App">
        <header className="App-header">
          {/* container of multiple cards */}
          <div className="card-container">
            <Drafter allCards={data.default} />
          </div>
        </header>
      </div>
    </ParticleContext.Provider>
  );
}

export default App;
