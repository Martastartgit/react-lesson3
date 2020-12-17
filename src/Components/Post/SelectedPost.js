import React, {Component} from 'react';
import ChosenPost from "./ChosenPost";
import {PostContext} from "../../Context/PostContext";

class SelectedPost extends Component {

    render() {
        let {userId} = this.props;
        const {posts} = this.context;
        return (
            <div>
                {
                    posts.filter(value => value.userId === +(userId)).map(filteredPost => <ChosenPost key={filteredPost.id} item={filteredPost}/>
                )}

            </div>
        );
    }
}
SelectedPost.contextType = PostContext
export default SelectedPost;