const JustifyBlock = (props) => {
    return (
        <p 
            {...props.attributes}
            style={{textAlign: 'justify'}}
        >
            {props.children}
        </p>
    );
}
 
export default JustifyBlock;