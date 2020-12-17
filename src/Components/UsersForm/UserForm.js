import React, {Component} from 'react';
import SelectedUser from "../User/SelectedUser";

class UserForm extends Component {
    state = {value : 'Bret'};
    myForm = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.myForm.current.value)
    }

    render() {
        let {value} = this.state;
        return (
            <div className={'shadow-lg p-3 mb-5 bg-white rounded'}>
                <form ref={this.myForm} onSubmit={this.handleSubmit}>
                    <label className={'font-italic font-weight-bold'}>
                        Choose User by userName :
                        <select value={value} className={'ml-3'}
                            onChange={(e)=> this.setState({value: e.target.value})}>
                            <option value="Bret">Bret</option>
                            <option value="Antonette">Antonette</option>
                            <option value="Samantha">Samantha</option>
                            <option value="Karianne">Karianne</option>
                            <option value="Kamren">Kamren</option>
                            <option value="Leopoldo_Corkery">Leopoldo_Corkery</option>
                            <option value="Elwyn.Skiles">Elwyn.Skiles</option>
                            <option value="Maxime_Nienow">Maxime_Nienow</option>
                            <option value="Delphine">Delphine</option>
                            <option value="Moriah.Stanton">Moriah.Stanton</option>
                        </select>
                    </label>
                </form>
                <div>
                    {value&&
                       <SelectedUser username={value}/>
                    }
                </div>
            </div>
        );
    }
}

export default UserForm;

