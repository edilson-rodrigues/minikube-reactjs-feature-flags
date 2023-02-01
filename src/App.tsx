import logo from "./logo.svg";
import "./App.css";
import { Feature, FeatureToggles } from "@paralleldrive/react-feature-toggles";
import { useFeatureToggle } from "./hooks";

const featureName = "key-3000";

function App() {
  const { flags } = useFeatureToggle();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FeatureToggles features={flags}>
          <Feature
            name={featureName}
            inactiveComponent={() => <p>This is the inactive component</p>}
            activeComponent={() => <p>This is the active component</p>}
          />
        </FeatureToggles>
      </header>
    </div>
  );
}

export default App;
