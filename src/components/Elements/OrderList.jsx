const OrderList = (props) => {
    return (
        <ol {...props.attributes}>
            <li>{props.children}</li>
        </ol>
    );
}
 
export default OrderList;