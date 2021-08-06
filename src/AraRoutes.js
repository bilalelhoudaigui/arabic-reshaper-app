import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import HowItWorks from "./HowItWorks";


function AraRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"> <Home /></Route>
                <Route exact path="/how-it-works"> <HowItWorks /></Route>
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </BrowserRouter>
    )
};

export default AraRoutes;