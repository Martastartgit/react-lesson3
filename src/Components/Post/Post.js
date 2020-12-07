import React, {Component} from 'react';

class Post extends Component {
    render() {

        let{item, findPost} = this.props
        return (
            <div>
                <h3>{item.id} - {item.title}</h3>
                <button onClick={()=> findPost(item.id)}>Show post</button>



            </div>
        );
    }
}

export default Post;