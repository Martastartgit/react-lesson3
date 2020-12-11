import React, {Component} from 'react';
import {UsersServices} from "../Services/UsersServices";
import User from "../User/User";
import FullUser from "../FullInfoUser/FullUser";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


class AllUsers extends Component {
    UserServices = new UsersServices();
    state = { user : []};

    async componentDidMount() {
        let user = await this.UserServices.getAllUsers();
        this.setState({user})
    };

    render() {
        let {user} = this.state;
        let {match : {url}} = this.props;

        return (
            <div>
                {
                    user.map(value => (
                            <User item={value} key={value.id}/>
                        )
                    )
                }
                <hr/>
                <div>
                    <Switch>
                        <Route path={url + '/:id'} render={(props)=> {
                            let {match : {params : {id}}} = props;
                            return <FullUser {...props} key={id}/>
                        }}/>

                    </Switch>
                </div>


            </div>
        );
    }
}

export default withRouter(AllUsers);