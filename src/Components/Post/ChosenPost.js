export default function ChosenPost (props) {
    const{item} = props;
    return (
        <div>
            <h3>UserId: {item.userId}.<strong>Title:</strong> {item.title}</h3>
            <p><strong>body:</strong> {item.body}</p>
        </div>
    )


}