import React,{createContext, Component} from 'react'

export const PostContext = createContext()

export class PostProvider extends Component {

    state = {
        isLoading: false,
        posts: [],
    }
    componentDidMount() {
        this.setState({isLoading: true})
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response=>response.json())
            .then(posts=> this.setState({posts,isLoading : false}))
    }

    render() {
        return (
            <PostContext.Provider value={this.state}>
                {this.props.children}
            </PostContext.Provider>
        )
    }
}