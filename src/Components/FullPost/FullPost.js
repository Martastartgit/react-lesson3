import React, {Component} from 'react';
import {PostServices} from "../Services/PostServices";

class FullPost extends Component {
    state = { chosenPost: null};
    PostServices = new PostServices();
    async componentDidMount() {
        let {match:{params:{id}}} = this.props;
        let chosenPost = await this.PostServices.getPost(id);
        this.setState({chosenPost});
    }

    render() {
        let {chosenPost} = this.state;
        return (
            <div>
                { chosenPost && <div>{chosenPost.body}</div>}
            </div>
        );
    }
}

export default FullPost;