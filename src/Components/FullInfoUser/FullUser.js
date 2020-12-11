import React, {Component} from 'react';
import {UsersServices} from "../Services/UsersServices";

class FullUser extends Component {
    UserServices = new UsersServices();
    state = { chosenUser : null};
    async componentDidMount() {
        let {match :{params :{id}}} = this.props;
        let chosenUser = await this.UserServices.getUserById(id);
        this.setState({chosenUser})
    }

    render() {
        let {chosenUser} = this.state;

        return (
            <div>
                { chosenUser &&
                   <div> {chosenUser.username} - {chosenUser.email}</div>
                }

            </div>
        );
    }
}

export default FullUser;