const CodeBlock = (props) => {
    const {attributes, children} = props;
    
    return (
        <pre {...attributes}>
            <code>{children}</code>
        </pre>
    );
}
 
export default CodeBlock;