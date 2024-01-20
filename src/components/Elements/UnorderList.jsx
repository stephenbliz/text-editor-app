const UnorderList = (props) => {
    return (
        <ul {...props.attribute}>
            <li>{props.children}</li>
        </ul>
    );
}
 
export default UnorderList;