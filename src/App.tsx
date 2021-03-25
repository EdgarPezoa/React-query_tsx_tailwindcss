import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GameList from "./Pages/Games/GameList";
import GameCreate from "./Pages/Games/GameCreate";
import GameEdit from "./Pages/Games/GameEdit";
import Game from "./Pages/Games/Game";

type AppProps = {};
const App: FunctionComponent<AppProps> = (props) => {
    return (
        <Router>
            <Switch>
                <Route path="/create">
                    <GameCreate />
                </Route>
                <Route path="/edit/:id">
                    <GameEdit />
                </Route>
                <Route path="/:id">
                    <Game />
                </Route>
                <Route path="/">
                    <GameList />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
