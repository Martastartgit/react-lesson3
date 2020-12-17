import React, {Component} from 'react';
import SelectedPost from "../Post/SelectedPost";

class PostForm extends Component {
    state ={inputValue : ''};

    handleSubmit =(e) => {
        e.preventDefault()
    }
    render() {
        let {inputValue} = this.state
        return (
            <div className={'shadow-lg p-3 mb-5 bg-white rounded'}>
                <form onSubmit={this.handleSubmit}>
                    <label className={'font-italic font-weight-bold'}>
                        Choose post by userId:
                        <input type="number" className={'ml-3 text-center'}
                               onChange={(e)=> this.setState({inputValue: e.target.value})}
                               value={inputValue}
                               min={'1'}
                               max={'10'}
                        />
                    </label>
                </form>
                <div>
                    {inputValue &&
                       <SelectedPost key={inputValue} userId={inputValue}/>
                    }
                </div>
            </div>
        );
    }
}

export default PostForm;

