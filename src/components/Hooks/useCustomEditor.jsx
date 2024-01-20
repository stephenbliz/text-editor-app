import {Editor, Transforms, Element} from 'slate'

const useCustomEditor = () => {
    const customEditor = {
        isCodeBlockActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'code'
            });

            return !!match
        },

        toggleCodeBlock(editor){
            const isActive = customEditor.isCodeBlockActive(editor);
            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'code'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isBoldMarkActive(editor){
            const marks = Editor.marks(editor);
            return marks? marks.bold === true : false
        },

        toggleBoldMark(editor){
            const isActive = customEditor.isBoldMarkActive(editor);

            if(isActive){
                Editor.removeMark(editor, 'bold');
            }else{
                Editor.addMark(editor, 'bold', true);
            }
        },

        isItalicMarkActive(editor){
            const marks = Editor.marks(editor);
            return marks? marks.italic === true : false
        },

        toggleItalicMark(editor){
            const isActive = customEditor.isItalicMarkActive(editor);
            
            if(isActive){
                Editor.removeMark(editor, 'italic');
            }else{
                Editor.addMark(editor, 'italic', true);
            }
        },

        isCenterAlignMarkActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'center'
            })
            return !!match

        },

        toggleCenterAlignMark(editor){
            const isActive = customEditor.isCenterAlignMarkActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'center'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isRightAlignMarkActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'right'
            })
            return !!match

        },

        toggleRightAlignMark(editor){
            const isActive = customEditor.isRightAlignMarkActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'right'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isJustifyAlignMarkActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'justify'
            });

            return !!match
        },

        toggleJustifyAlignMark(editor){
            const isActive = customEditor.isJustifyAlignMarkActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'justify'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isUnderlineMarkActive(editor){
            const marks = Editor.marks(editor);
            return marks ? marks.underline === true : false
        },

        toggleUnderlineMark(editor){
            const isActive = customEditor.isUnderlineMarkActive(editor);
            if(isActive){
                Editor.removeMark(editor, 'underline');
            }else{
                Editor.addMark(editor, 'underline', true)
            }
        },

        isBlockQuoteActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'blockquote'
            });

            return !!match
        },

        toggleBlockQuote(editor){
            const isActive = customEditor.isBlockQuoteActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'blockquote'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isUnorderListActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'unorderlist'
            });

            return !!match
        },

        toggleUnorderList(editor){
            const isActive = customEditor.isUnorderListActive(editor);
            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'unorderlist'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            );
        },

        isOrderListActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'orderlist'
            });

            return !!match
        },

        toggleOrderList(editor){
            const isActive = customEditor.isOrderListActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'orderlist'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isH1BlockActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'h1'
            });

            return !!match
        },

        toggleH1Block(editor){
            const isActive = customEditor.isH1BlockActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'h1'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isH2BlockActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'h2'
            });

            return !!match
        },

        toggleH2Block(editor){
            const isActive = customEditor.isH2BlockActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'h2'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isH3BlockActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'h3'
            });

            return !!match
        },

        toggleH3Block(editor){
            const isActive = customEditor.isH3BlockActive(editor);

            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'h3'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        },

        isUpperCaseMarkActive(editor){
            const marks = Editor.marks(editor);
            return marks? marks.uppercase === true : false
        },

        toggleUpperCaseMark(editor){
            const isActive = customEditor.isUpperCaseMarkActive(editor);
            if(isActive){        
                Editor.removeMark(editor, 'uppercase');
            }else{
                Editor.addMark(editor, 'uppercase', true)
            }
        },

        isCapitalizeMarkActive(editor){
            const marks = Editor.marks(editor);
            return marks? marks.capitalize === true : false
        },

        toggleCapitalizeMark(editor){
            const isActive = customEditor.isCapitalizeMarkActive(editor);
            if(isActive){        
                Editor.removeMark(editor, 'capitalize');
            }else{
                Editor.addMark(editor, 'capitalize', true)
            }
        },

        isLowerCaseMarkActive(editor){
            const marks = Editor.marks(editor);
            return marks? marks.lowercase === true : false
        },

        toggleLowercaseMark(editor){
            const isActive = customEditor.isLowerCaseMarkActive(editor);
            if(isActive){        
                Editor.removeMark(editor, 'lowercase');
            }else{
                Editor.addMark(editor, 'lowercase', true);
                
            }
        },

        isLeftBlockActive(editor){
            const [match] = Editor.nodes(editor, {
                match: n=> n.type === 'left'
            });

            return !!match
        },

        toggleLeftBlock(editor){
            const isActive = customEditor.isLeftBlockActive(editor);
            Transforms.setNodes(
                editor,
                {type: isActive ? null : 'left'},
                {match: n=> Element.isElement(n) && Editor.isBlock(editor, n)}
            )
        }


    }
    return {customEditor};
}
 
export default useCustomEditor;