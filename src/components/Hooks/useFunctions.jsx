import { useCallback, useMemo } from "react";
import CodeBlock from "../Elements/CodeBlock";
import DefaultElement from "../Elements/DefaultElement";
import useCustomEditor from "./useCustomEditor";
import CenterBlock from "../Elements/CenterBlock";
import Leaves from "../Leaves";
import RightBlock from "../Elements/RightBlock";
import JustifyBlock from "../Elements/JustifyBlock";
import QuoteBlock from "../Elements/QuoteBlock";
import UnorderList from "../Elements/UnorderList";
import OrderList from "../Elements/OrderList";
import H1Block from "../Elements/H1Block";
import H2Block from "../Elements/H2Block";
import H3Block from "../Elements/H3Block";
import LeftBlock from "../Elements/LeftBlock";


const useFunctions = (editor) => {
    const {customEditor} = useCustomEditor();

    const renderElement = useCallback((props)=>{
        switch(props.element.type){
            case 'code':
                return (<CodeBlock {...props} />)
            case 'center':
                return (<CenterBlock {...props} />)
            case 'right':
                return (<RightBlock {...props} />)
            case 'left':
                return (<LeftBlock {...props} />)
            case 'justify':
                return (<JustifyBlock {...props} />)
            case 'blockquote':
                return (<QuoteBlock {...props} />)
            case 'unorderlist':
                return (<UnorderList {...props} />)
            case 'orderlist':
                return (<OrderList {...props} />)
            case 'h1':
                return (<H1Block {...props} />)
            case 'h2':
                return (<H2Block {...props} />)
            case 'h3':
                return (<H3Block {...props} />)
            default:
                return (<DefaultElement {...props} />)
        }
    }, []);

    const renderleaf = useCallback((props)=>{
        return (<Leaves {...props} />)
    }, [])

    const handleEditorChange = (value)=>{
        const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
        );
        if(isAstChange){
            const content = JSON.stringify(value);
            localStorage.setItem('content', content);
        }
    }

    const style = {
        width: '60%',
        minHeight: '300px',
        margin: '50px auto auto auto',
        backgroundColor: 'rgb(240, 233, 233)',
        padding: '.5px 10px 2px 10px',
        border: '1px solid black',
        outline: 'none',
        borderRadius: '10px'
    };

    const initialValue = useMemo(
        ()=> JSON.parse(localStorage.getItem('content')) || [
            {
                type: 'paragraph',
                children: [{text: 'A line of text in a paragraph'}]
            }
        ], []
    )

    const handleCtrlKey = (e)=>{
        if(!e.ctrlKey){
            return
        }

        switch(e.key){
            case '`': {
                e.preventDefault();
                customEditor.toggleCodeBlock(editor);
                break;
            }
            case 'b': {
                e.preventDefault();
                customEditor.toggleBoldMark(editor);
                break;
            }
            case 'i': {
                e.preventDefault();
                customEditor.toggleItalicMark(editor);
                break;
            }
        }
    }

    return {renderElement, handleCtrlKey, renderleaf, handleEditorChange, initialValue, style};
}
 
export default useFunctions;