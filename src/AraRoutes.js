import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import AraNotFound from "./components/AraNotFound";
import HowItWorks from "./docs/HowItWorks";


function AraRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"> <Home /></Route>
                <Route exact path="/how-it-works"> <HowItWorks /></Route>
                <Route path="/404" component={AraNotFound} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    )
};

export default AraRoutes;