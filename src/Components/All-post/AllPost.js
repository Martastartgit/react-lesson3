import React, {Component} from 'react';
import './AllPost.css'
import {PostService} from "../../Services/PostService";
import Post from "../Post/Post";

class AllPost extends Component {
    PostService = new PostService();
    state = { users : [], chosenPost : null};


    componentDidMount() {
        this.PostService.getAllPost().then(value => this.setState({users: value}));
    }
    findPost =(id)=> {
        this.PostService.getPostById(id).then(value => this.setState({chosenPost: value}) )

    }


    render() {
        let {users, chosenPost} = this.state;
        return (
            <div className={'wrap'}>
                <div>
                    <h1>All Post</h1>
                    {
                        users.map(value => (
                            <Post item={value} key={value.id} findPost={this.findPost}/>
                        ))

                    }
                </div>
                {chosenPost &&
                   <div> {chosenPost.body}</div>
                }
                    

            </div>
        );
    }
}

export default AllPost;