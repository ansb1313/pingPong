import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";
import Create from "../pages/Create/Create";
import Story from "../pages/Story/Story";
import MapboxContainer from "../container/MapBox/MapboxContainer";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path={"/create/:id"} component={Create} />
            <Route path={'/story'} component={Story} />
            <Route path={'/mapbox'} component={MapboxContainer} />
        </Switch>
    );
};

export default Routes;
