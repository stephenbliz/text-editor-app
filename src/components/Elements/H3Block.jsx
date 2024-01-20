const H3Block = (props) => {
    return (
        <h3 {...props.attributes}>
            {props.children}
        </h3>
    );
}
 
export default H3Block;