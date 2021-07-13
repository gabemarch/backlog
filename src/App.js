import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GamesPage from "./pages/GamesPage/";
import ProfilePage from "./pages/ProfilePage";
import ContactPage from "./pages/ContactPage/";
import HomePage from "./pages/HomePage/";
import Footer from "./components/footer/";
import AuthPage from "./pages/AuthPage/";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/jatekok">
            <GamesPage />
          </Route>
          <Route path="/profilom">
            <ProfilePage />
          </Route>
          <Route path="/kapcsolat">
            <ContactPage />
          </Route>
          <Route path="/bejelentkezes">
            <AuthPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
