import React, {Component} from 'react';
import {PostServices} from "../Services/PostServices";
import Post from "../Post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../FullPost/FullPost";

class AllPost extends Component {
    PostServices = new PostServices();
    state = { post: []};
    async componentDidMount() {
        let post = await this.PostServices.getAllPost();
        this.setState({post})
    }

    render() {
    let {post} = this.state;
    let {match: {url}}= this.props;
        return (
            <div>
                {
                    post.map(value =>
                        <Post key={value.id} item={value}/>
                    )
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        let {match : {params: {id}}} = props;
                        return <FullPost key={id} {...props}/>
                    }}/>
                </Switch>
            </div>

        );
    }
}

export default withRouter(AllPost);