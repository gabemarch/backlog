import "./App.css";
import { DefaultButton } from "./elements/Buttons";

function App() {
  return (
    <div className="App">
      <DefaultButton onClick={console.log("clicked")}>Click ME</DefaultButton>
    </div>
  );
}

export default App;
