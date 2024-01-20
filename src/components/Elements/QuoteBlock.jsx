const QuoteBlock = (props) => {
    return (
        <blockquote  {...props.attributes}>
            "{props.children}"
        </blockquote>
    );
}
 
export default QuoteBlock;