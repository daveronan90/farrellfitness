import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import ClassesPage from "./Pages/ClassesPage/ClassesPage";
import GolfPage from "./Pages/GolfPage/GolfPage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import NutritionPage from "./Pages/NutritionPage/NutritionPage";
import PTPage from "./Pages/PTPage/PTPage";
import TherapyPage from "./Pages/TherapyPage/TherapyPage";
import StykuPage from "./Pages/StykuPage/StykuPage";
import TeamsPage from "./Pages/TeamsPage/TeamsPage";
import TransformationsPage from "./Pages/TransformationsPage/TransformationsPage";
import { useState } from "react";

function App() {
  const [navShown, setNavShown] = useState(false);

  return (
    <Router>
      <div className={navShown ? "app" : ""}>
        <Header setNavShown={setNavShown} navShown={navShown} />
        <div className="main">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/classes" component={ClassesPage} />
            <Route path="/golf" component={GolfPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/nutrition" component={NutritionPage} />
            <Route path="/personaltraining" component={PTPage} />
            <Route path="/physicaltherapy" component={TherapyPage} />
            <Route path="/styku" component={StykuPage} />
            <Route path="/teams" component={TeamsPage} />
            <Route
              exact
              path="/transformations"
              component={TransformationsPage}
            />
            <Route>
              <ErrorPage />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
