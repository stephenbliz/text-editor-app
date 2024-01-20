const H2Block = (props) => {
    return (
        <h2 {...props.attributes}>
            {props.children}
        </h2>
    );
}
 
export default H2Block;