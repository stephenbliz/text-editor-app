const H1Block = (props) => {
    return (
        <h1 {...props.attributes}>
            {props.children}
        </h1>
    );
}
 
export default H1Block;