import { FaAlignCenter } from "react-icons/fa";
import { FaAlignJustify } from "react-icons/fa";
import { FaAlignRight } from "react-icons/fa";
import { FaAlignLeft } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaBold } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaUnderline } from "react-icons/fa";
// import { BsBlockquoteLeft } from "react-icons/bs";
import { GrBlockQuote } from "react-icons/gr";
import { FaListUl } from "react-icons/fa";
import { FaListOl } from "react-icons/fa";


const ToolBar = ({customEditor, editor}) => {

    const buttons = [
        {name: 'bold', function: customEditor.toggleBoldMark(editor), id: 1},
        {name: 'italic', function: customEditor.toggleItalicMark(editor), id: 2},
        {name: 'code block', function: customEditor.toggleCodeBlock(editor), id: 3},
        {name: 'center align', function: customEditor.toggleCenterAlignMark(editor), id: 4},
        {name: 'right align', function: customEditor.toggleRightAlignMark(editor), id: 5},
        {name: 'justify align', function: customEditor.toggleJustifyAlignMark(editor), id: 6},
        {name: 'underline', function: customEditor.toggleUnderlineMark(editor), id: 7},
        {name: 'blockquote', function: customEditor.toggleBlockQuote(editor), id: 8},
        {name: 'unorder list', function: customEditor.toggleUnorderList(editor), id: 9},
        {name: 'order list', function: customEditor.toggleOrderList(editor), id: 10},
        {name: 'h1', function: customEditor.toggleH1Block(editor), id: 11},
        {name: 'h2', function: customEditor.toggleH2Block(editor), id: 12},
        {name: 'h3', function: customEditor.toggleH3Block(editor), id: 13},
        {name: 'uppercase', function: customEditor.toggleUpperCaseMark(editor), id: 14},
        {name: 'capitalize', function: customEditor.toggleCapitalizeMark(editor), id: 15},
        {name: 'lowercase', function: customEditor.toggleLowercaseMark(editor), id: 16}
    ]

    return (
        <div className="toolWrapper">
            {/* {buttons.map((button)=>(
                <button
                    onMouseDown={(e)=>{
                        e.preventDefault();
                        button.function
                    }}
                    key={button.id}
                    className="btn"
                >
                    {button.name}
                </button>
            ))} */}
            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleBoldMark(editor);
                }}
                className="btn"
            >
                <FaBold />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleItalicMark(editor);
                }}
                className="btn"
            >
                <FaItalic />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleCodeBlock(editor);
                }}
                className="btn"
            >
                <FaCode />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleLeftBlock(editor);
                }}
                className="btn"
            >
                <FaAlignLeft />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleCenterAlignMark(editor);
                }}
                className="btn"
            >
                <FaAlignCenter />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleRightAlignMark(editor);
                }}
                className="btn"
            >
                <FaAlignRight />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleJustifyAlignMark(editor);
                }}
                className="btn"
            >
                <FaAlignJustify />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleUnderlineMark(editor);
                }}
                className="btn"
            >
                <FaUnderline />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleBlockQuote(editor);
                }}
                className="btn"
            >
                {/* <BsBlockquoteLeft /> */}
                <GrBlockQuote />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleUnorderList(editor);
                }}
                className="btn"
            >
                <FaListUl />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleOrderList(editor);
                }}
                className="btn"
            >
                <FaListOl />
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleH1Block(editor);
                }}
                className="btn"
            >
                <strong>H<small>1</small></strong>
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleH2Block(editor);
                }}
                className="btn"
            >
                <strong>H<small>2</small></strong>
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleH3Block(editor);
                }}
                className="btn"
            >
                <strong>H<small>3</small></strong>
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleUpperCaseMark(editor);
                }}
                className="btn"
            >
                <strong>ABC</strong>
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleCapitalizeMark(editor);
                }}
                className="btn"
            >
                <strong>Abc</strong>
            </button>

            <button
                onMouseDown={(e)=>{
                    e.preventDefault();
                    customEditor.toggleLowercaseMark(editor);
                }}
                className="btn"
            >
                <strong>abc</strong>
            </button>
        </div>
    );
}
 
export default ToolBar;