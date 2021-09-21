import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import AboutPage from "./about";
import ToursPage from "./tours";
import BusTour1 from "./bustour1";
import BusTour2 from "./bustour2";
import BayCruise from "./baycruise";
import BikeTour from "./biketour";
import MuirWoods from "./muirwoods";
import FaqPage from "./faq";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import BookYourTickets from "./bookyourtickets";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import PurchasePage from "./purchase";
import AuthPage from "./auth";
import { Switch, Route, Router } from "./../util/router.js";
import Auth0Callback from "./auth0-callback.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { AuthProvider } from "./../util/auth.js";

function App(props) {
  return (
    <AuthProvider>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />
          <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
                <div class="gdlr-core-page-builder-body">
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/tours" component={ToursPage} />

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/book-your-tickets" component={BookYourTickets} />

            <Route exact path="/tour/open-bus-city-tour-1" component={BusTour1} />

            <Route exact path="/tour/open-bus-city-tour-2" component={BusTour2} />

            <Route exact path="/tour/one-hour-bay-cruise" component={BayCruise} />

            <Route exact path="/tour/all-day-bike-tour" component={BikeTour} />

            <Route exact path="/tour/muir-woods" component={MuirWoods} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/purchase/:plan" component={PurchasePage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route exact path="/auth0-callback" component={Auth0Callback} />

            <Route component={NotFoundPage} />
          </Switch>
          </div>
          </div>
          <Footer
            bg="light"
            textColor="dark"
            size="sm"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2020 Company"
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </Router>
    </AuthProvider>
  );
}

export default App;
