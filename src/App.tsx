import logo from "./logo.svg";
import "./App.css";
import { Feature, FeatureToggles } from "@paralleldrive/react-feature-toggles";
import { useFeatureToggle } from "./hooks";

const featureName = "@active-component";

function App() {
  const { isFeatureEnabled } = useFeatureToggle();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <FeatureToggles features={isFeatureEnabled}>
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
