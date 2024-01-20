const Leaves = (props) => {
    const {attributes, leaf, children} = props;

    const styles = {
        fontWeight: leaf.bold ? 'bold' : 'normal',
        fontStyle: leaf.italic ? 'italic' : 'normal',
        textDecoration: leaf.underline ? 'underline' : '',
        textTransform: leaf.capitalize ? 'capitalize' : leaf.uppercase ? 'uppercase' : leaf.lowercase ? 'lowercase' : '',
    };

    return (
        <span 
            {...attributes}
            style={styles}
        >
            {children}
        </span>
    );
}
 
export default Leaves;