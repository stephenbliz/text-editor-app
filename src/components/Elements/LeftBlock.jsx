const LeftBlock = (props) => {
    return (
        <p 
            {...props.attribute}
            style={{textAlign: 'left'}}
        >
            {props.children}
        </p>
    );
}
 
export default LeftBlock;