import "./App.css";
import { DefaultButton } from "./elements/Buttons";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <DefaultButton onClick={console.log("clicked")}>Click ME</DefaultButton>
      <Navbar />
    </div>
  );
}

export default App;
