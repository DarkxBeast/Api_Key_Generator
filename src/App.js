import ApiKeyGenerator from "./components/ApiKeyGenerator";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="API_Text">API Key Generator</h1>
        <ApiKeyGenerator />
      </header>
    </div>
  );
}
