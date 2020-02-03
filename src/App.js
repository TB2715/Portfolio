import React from 'react';

import {HashRouter, Route} from "react-router-dom";
import Main from "./Components/Main";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                {/*<Navigation />*/}
                <Route path="/" exact={true} component={Main} />
            </HashRouter>
        );
    }
}

export default App;
