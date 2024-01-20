const CenterBlock = (props) => {
    return (
        <p 
            {...props.attributes}
            style={{textAlign: 'center'}}
        >
            {props.children}
        </p>
    );
}
 
export default CenterBlock;