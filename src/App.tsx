import logo from "./logo.svg";
import "./App.css";
import { Feature, FeatureToggles } from "@paralleldrive/react-feature-toggles";
import { useFeatureToggle } from "./hooks";
import { client } from "./client";

const featureName = "@active-component";

function App() {
  const { flags, getFlags } = useFeatureToggle();

  const handleChangeFlag = async (flag: string) => {
    client
      .patch("flag/1", {
        flag,
      })
      .then(() => getFlags())
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FeatureToggles features={flags}>
          <Feature
            name={featureName}
            inactiveComponent={() => (
              <div>
                <p>This is the inactive component</p>
                <button onClick={() => handleChangeFlag("@active-component")}>
                  active component
                </button>
              </div>
            )}
            activeComponent={() => (
              <div>
                <p>This is the active component</p>
                <button onClick={() => handleChangeFlag("@inactive-component")}>
                  inactive component
                </button>
              </div>
            )}
          />
        </FeatureToggles>
      </header>
    </div>
  );
}

export default App;
