import React, {Component} from 'react';
import AllUsers from "./Components/All-users/AllUsers";
import AllPost from "./Components/All-post/AllPost";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to={'/'}>Start Page</Link>
                        </li>
                        <li>
                            <Link to={'/user'}>Users</Link>
                        </li>
                        <li>
                            <Link to={'/posts'}>Posts</Link>
                        </li>
                    </ul>
                    <Switch>
                        <Route  exact path={'/'} render={() => {
                            return (<div>Empty page</div>)
                        }}/>;
                        <Route path={'/user'} render={() => <AllUsers/>}/>;
                        <Route path={'/posts'} render={() => <AllPost/>}/>;


                    </Switch>

                </div> 
            </Router>
           
        );
    }
}

export default App;

