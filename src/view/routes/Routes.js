import React from "react";
import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Main from "../pages/Main/Main";
import Create from "../pages/Create/Create";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path={"/create/:id"} component={Create} />
        </Switch>
    );
};

export default Routes;
