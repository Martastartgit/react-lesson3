import React, {Component} from 'react';
import {UsersContext} from "../../Context/UserContext";
import ChosenUser from "./ChosenUser";

class SelectedUser extends Component {

    render() {
        const {users,isLoading} = this.context;
        let {username}= this.props
        let chosenUser = users.find(value => value.username === username);
        const user = Object.values(chosenUser);

        return (
            <div>
                {
                    isLoading && <h1>LODING.....</h1>
                }
                {
                    <ChosenUser key={user[0]} user={user}/>
                }
            </div>
        );
    }
}
SelectedUser.contextType = UsersContext;

export default SelectedUser;

