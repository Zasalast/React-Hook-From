import "./App.css";
import { FormBasic } from "./components/FormBasic";
import { FormValidation } from "./components/FormValidation";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>React Hook From</h1>
      </header>
      <div className="body">
        <FormBasic />
        <FormValidation />
      </div>
    </div>
  );
}

export default App;
