import React, {Component} from 'react';
import Main from "./Components/Main-component/Main";
import {BrowserRouter as Router} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Main/>
                </div>
            </Router>
        );
    }
}

export default App;

