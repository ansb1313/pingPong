import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/Main/Main";
import Create from "../pages/Create/Create";
import Story from "../pages/Story/Story";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path={"/create/:id"} component={Create} />
            <Route path={'/story'} component={Story} />
        </Switch>
    );
};

export default Routes;
