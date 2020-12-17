import React, {Component} from 'react';
import UserForm from "../UsersForm/UserForm";
import PostForm from "../PostForm/PostForm";
import {Link,Switch,Route, withRouter} from "react-router-dom";



class Main extends Component {
    render() {
        let {match : {url}} = this.props;
        return (
            <div>
                <nav className={'navbar navbar-expand-lg navbar-light'}>
                    <ul className={'nav'}>
                        <li className={'nav-item m-3'}>
                            <Link to={url + 'users'} className={'font-weight-bold text-dark'}>Users</Link>
                        </li>
                        <li className={'nav-item m-3'}>
                            <Link to={url + 'post'} className={'font-weight-bold text-dark'}>Post</Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <Switch>
                        <Route path={url + 'users'} render={() => <UserForm/>}/>
                        <Route path={url + 'post'} render={() => <PostForm/>}/>
                    </Switch>
                </div>

            </div>
        );
    }
}

export default withRouter(Main);