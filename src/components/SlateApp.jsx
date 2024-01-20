import { useState } from "react";
import {createEditor} from 'slate';
import {withReact, Slate, Editable} from 'slate-react';
import useFunctions from "./Hooks/useFunctions";
import ToolBar from "./ToolBar";
import useCustomEditor from "./Hooks/useCustomEditor";

const SlateApp = () => {

    const [editor] = useState(()=> withReact(createEditor()));
    
    const {
        renderElement, 
        handleCtrlKey, 
        renderleaf, 
        handleEditorChange, 
        initialValue, 
        style
    } = useFunctions(editor);

    const {customEditor} = useCustomEditor();

    return ( 
        <Slate 
            editor={editor} 
            initialValue={initialValue}
            onChange={(value)=>handleEditorChange(value)} 
        >
            <ToolBar customEditor={customEditor} editor={editor} />
            <Editable 
                renderElement={renderElement}
                style={style}
                renderLeaf={renderleaf}
                onKeyDown={(e)=>handleCtrlKey(e)}
                className="editable"
            />
        </Slate>
    );
}
 
export default SlateApp;