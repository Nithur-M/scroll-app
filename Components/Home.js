import { useState } from 'react';
import { Flex, Grid, GridItem, Button, Circle, Text, Heading } from '@chakra-ui/react'

import { AiOutlineItalic, AiOutlineBold, AiOutlineUnderline, AiOutlineHighlight, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter, AiOutlineOrderedList, AiOutlineUnorderedList, AiOutlineDownload } from "react-icons/ai";
import { GoQuote } from 'react-icons/go';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { Select } from "chakra-react-select";

import { useEditor, EditorContent } from '@tiptap/react';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

const MenuBar = ({ editor, onSelectBorderColor, onBgColorChange }) => {
    const [bgColor, setBgColor] = useState('white');
    if (!editor) {
        return null
      }
      const customComponents = {
        IndicatorSeparator:() => null,
      };

    const chakraStyles = {
        dropdownIndicator: (provided, state) => ({
            ...provided,
            background: "white",
        }),
        menu: base => ({
            ...base,
            fontWeight: '300',
            mt: 0,
            boxShadow: '1px 5px 10px rgb(0 0 0 / 0.2)',
            borderRadius: 'lg'
        }) 
    };

    const onItalicClick = () => {
        editor.chain().focus().toggleItalic().run()
    }

    const onBoldClick = () => {
        editor.chain().focus().toggleBold().run()
    }

    const onUnderlineClick = () => {
        editor.chain().focus().toggleUnderline().run();
        //onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))
    }

    const onUnorderedListClick = () => {
        editor.chain().focus().toggleBulletList().run()
    }

    const onOrderedListClick = () => {
        editor.chain().focus().toggleOrderedList().run()
    }


    const onQuoteClick = () => {
        editor.chain().focus().toggleBlockquote().run()
    }

    const onAlignLeftClick = () => {
        editor.chain().focus().setTextAlign('left').run()
    }

    const onAlignRightClick = () => {
        editor.chain().focus().setTextAlign('right').run()
    }

    const onAlignCenterClick = () => {
        editor.chain().focus().setTextAlign('center').run()
    }

    const onHighlightClick = () => {
        editor.chain().focus().toggleHighlight({ color: 'red'}).run()
    }

    const onHeadingClick = (e) => {
        editor.chain().focus().toggleHeading({ level: e.value }).run()
    }

    var scale = 3;
    const handleDownload = () => {
        domtoimage.toBlob(document.getElementById('canvas'), {
            width: document.getElementById('canvas').clientWidth * scale,
            height: document.getElementById('canvas').clientHeight * scale,
            style: {
             transform: 'scale('+scale+')',
             transformOrigin: 'top left',
             width: document.getElementById('canvas').clientWidth + "px",
             height: document.getElementById('canvas').clientHeight + "px",
           }
        })
        .then(function (blob) {
            window.saveAs(blob, `scroller-app-${new Date().toISOString()}.png`);
        });
    }

    const handleBorderColor = (color) => {
        onSelectBorderColor(color)
    }

    const handleBgColor = (color) => {
        setBgColor(color)
        onBgColorChange(color)
    }
    return (
        <Flex direction="column" bg="white" w="60" borderRadius="lg" h="max-content" gap="2" p="2">
            <Grid templateColumns='repeat(4, 1fr)' gap={2} h="52">
                <GridItem colSpan={4} >
                    <Select
                        chakraStyles={chakraStyles}
                        components={customComponents}
                        selectedOptionStyle="check"
                        defaultValue={{label: "Heading 1", value: "H1"}}
                        options={[
                        {
                            label: "Heading 1",
                            value: 1,
                            isFixed: true,
                            isActive: editor.isActive('heading', { level: 1 })
                        },
                        {
                            label: "Heading 2",
                            value: 2,
                            isFixed: true,
                            isActive: editor.isActive('heading', { level: 2 })
                        },
                        {
                            label: "Heading 3",
                            value: 3,
                            isFixed: true,
                            isActive: editor.isActive('heading', { level: 3 })
                        },
                        {
                            label: "Heading 4",
                            value: 4,
                            isFixed: true,
                            isActive: editor.isActive('heading', { level: 4 })
                        },
                        {
                            label: "Heading 5",
                            value: 5,
                            isFixed: true,
                            isActive: editor.isActive('heading', { level: 5 })
                        },
                        {
                            label: "Heading 6",
                            value: 6,
                            isFixed: true,
                            isActive: editor.isActive('heading', { level: 6 })
                        },
                        ]}
                        onChange={onHeadingClick}
                    />
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('bold')} onClick={onBoldClick}><AiOutlineBold /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('italic')} onClick={onItalicClick}><AiOutlineItalic /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('underline')} onClick={onUnderlineClick}><AiOutlineUnderline /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('highlight')} onClick={onHighlightClick}><AiOutlineHighlight /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('bulletList')} onClick={onUnorderedListClick}><AiOutlineUnorderedList /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('orderedList')} onClick={onOrderedListClick}><AiOutlineOrderedList /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive('blockquote')} onClick={onQuoteClick}><GoQuote /></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive({ textAlign: 'left' })} onClick={onAlignLeftClick}><AiOutlineAlignLeft/></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive({ textAlign: 'center' })} onClick={onAlignCenterClick}><AiOutlineAlignCenter/></Button>
                </GridItem>
                <GridItem>
                    <Button colorScheme='gray' isActive={editor.isActive({ textAlign: 'right' })} onClick={onAlignRightClick}><AiOutlineAlignRight/></Button>
                </GridItem>
            </Grid>

            {/* <Text color="gray">Border</Text>
            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                {['tomato', 'blue', 'pink', 'red', 'purple'].map(color => <GridItem><Circle size='6' bg={color} onClick={()=>handleBorderColor(color)} /></GridItem>)}
            </Grid> */}

            <Text color="gray">Background</Text>
            <Grid templateColumns='repeat(5, 1fr)' gap={2}>
                {['white', '#FF7844', '#CBDB57', '#BCEAD5', '#DEBACE'].map(color => <GridItem><Circle size='6' bg={color} border={bgColor == color ? '2px' : '0'} borderColor="gray.200" onClick={()=>handleBgColor(color)} /></GridItem>)}
            </Grid>

            <Button leftIcon={<AiOutlineDownload/>} onClick={handleDownload}>Download</Button>
        </Flex>
    )
}

const Home = () => {
    const [borderColor, setBorderColor] = useState('red');
    const [bgColor, setBgColor] = useState('white');

    const editor = useEditor({
        extensions: [
          StarterKit,
          TextAlign.configure({
            types: ['heading', 'paragraph'],
          }),
          Highlight.configure({
            multicolor: true,
          }),
          Underline
        ],
        content: '<h2>A tiny text editor built with social shareability in mind</h2><p></p><ul><li><p>This is a content template.</p><p></p></li><li><p>You can edit this and save it as an image</p><p></p></li><li><p>Why I made this?</p><p></p></li><li><p>To enable creators to share content in a way that actually gets read</p><p></p></li><li><p>It perfectly fits the Twitter image view port</p><p></p></li><li><p>Just drop your content here and generate it as an image</p><p></p></li><li><p>Ill add more templates soon</p><p></p></li><li><p>If you have any template ideas, please let me know</p><p></p></li></ul>',
      })

    const handleBorderColorChange = (color) => {
        setBorderColor(color);
    }

    const handleBgColorChange = (color) => {
        setBgColor(color);
    }

    
    return(
        <Flex justify="space-evenly" align="center">
            
            <Flex w="568px" h="660px" bg={bgColor} p="4" borderRadius="2xl" id="canvas">
                <Flex direction="column" p="5" w="full" h="full" borderRadius="lg">
                    <EditorContent editor={editor} />
                </Flex>

            </Flex>
            <Flex>
                <MenuBar editor={editor} onSelectBorderColor={handleBorderColorChange} onBgColorChange={handleBgColorChange}/>
            </Flex>
        </Flex>
    )
}

export default Home;