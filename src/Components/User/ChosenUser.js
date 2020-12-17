function ChosenUser (props) {
    let {user} = props;
    return (
        <div>
            <h2>Id: {user[0]}. name: {user[1]}</h2>
            <p><strong>username:</strong> {user[2]}</p>
            <p><strong>email:</strong> {user[3]}</p>
            <p><strong>phone:</strong> {user[5]}</p>
        </div>
    );
}
export default ChosenUser