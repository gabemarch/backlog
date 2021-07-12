import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/";
import Footer from "./components/footer/";
import AuthPage from "./pages/AuthPage/";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/kapcsolat">
            <ContactPage />
          </Route>
          <Route path="/bejelentkezes">
            <AuthPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
