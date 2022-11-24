// noinspection JSValidateTypes

import { useState } from 'react';
import { Flex, Grid, GridItem, Button, Circle, Text } from '@chakra-ui/react'

import { AiOutlineItalic, AiOutlineBold, AiOutlineUnderline, AiOutlineHighlight, AiOutlineAlignLeft, AiOutlineAlignRight, AiOutlineAlignCenter, AiOutlineOrderedList, AiOutlineUnorderedList, AiOutlineDownload } from "react-icons/ai";
import { GoQuote } from 'react-icons/go';
import domtoimage from 'dom-to-image';
import { Select } from "chakra-react-select";

import { useEditor, EditorContent } from '@tiptap/react';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';

import styles from './Home.module.css';
import { Color } from '@tiptap/extension-color'
import {FontFamily} from "@tiptap/extension-font-family";
import TextStyle from '@tiptap/extension-text-style';

const MenuBar = ({ editor, onSelectBorderColor, onBgColorChange }) => {
    const [bgColor, setBgColor] = useState('#ffffff');
    if (!editor) {
        return null
      }
      const customComponents = {
        IndicatorSeparator:() => null,
      };

    const chakraStyles = {
        dropdownIndicator: (provided, state) => ({
            ...provided,
            background: "#ffffff",
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

    const onFontClick = (e) => {
        switch (e.value){
            case 1:
                editor.chain().focus().unsetFontFamily().run();
                break;
            case 2:
                editor.chain().focus().setFontFamily('Lobster, cursive').run();
                break;
            case 3:
                editor.chain().focus().setFontFamily('Comic Sans MS, Comic Sans').run();
                break;
            case 4:
                editor.chain().focus().setFontFamily('monospace').run();
                break;
            case 5:
                editor.chain().focus().setFontFamily('Dancing Script, cursive').run();
                break;
            case 6:
                editor.chain().focus().setFontFamily('Noto Serif, serif').run();
                break;
        }
    }

    const scale = 3;
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
    const handleFgColor = (color) => {
        editor.chain().focus().setColor(color).run();
    }
    return (
        <Flex direction="column" bg="white" w="max-content" borderRadius="lg" h="max-content" gap="2" p="2">
            <Grid templateColumns='repeat(5, 1fr)' gap={2} h="max-content">
                <GridItem colSpan={5}>
                    <Text color="gray">Font style</Text>
                </GridItem>
                <GridItem colSpan={5} >
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
                <GridItem colSpan={5} >
                    <Select
                        chakraStyles={chakraStyles}
                        components={customComponents}
                        selectedOptionStyle="check"
                        defaultValue={{label: "Default font", value: "H1"}}
                        options={[
                            {
                                label: "Default font",
                                value: 1,
                                isFixed: true,
                                isActive: editor.isActive()
                            },
                            {
                                label: "Lobster",
                                value: 2,
                                isFixed: true,
                                isActive: editor.isActive('textStyle', { fontFamily: 'Lobster, cursive' })
                            },
                            {
                                label: "Comic Sans",
                                value: 3,
                                isFixed: true,
                                isActive: editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })
                            },
                            {
                                label: "Monospace",
                                value: 4,
                                isFixed: true,
                                isActive: editor.isActive('textStyle', { fontFamily: 'monospace' })
                            },
                            {
                                label: "Hand Writting",
                                value: 5,
                                isFixed: true,
                                isActive: editor.isActive('textStyle', { fontFamily: 'Dancing Script, cursive' })
                            },
                            {
                                label: "Noto Serif",
                                value: 6,
                                isFixed: true,
                                isActive: editor.isActive('textStyle', { fontFamily: 'Noto Serif, serif' })
                            },
                        ]}
                        onChange={onFontClick}
                    />
                </GridItem>
                <GridItem colSpan={5}>
                    <Text color="gray">Text style</Text>
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
                <GridItem></GridItem>
                <GridItem></GridItem>
                <GridItem colSpan={5}>
                    <Text color="gray">Background</Text>
                </GridItem>
                {['#ffffff', '#ffcdd2', '#e1bee7', '#c5cae9', '#b3e5fc',
                    '#b2dfdb', '#dcedc8', '#fff9c4', '#ffe0b2', '#ffccbc'].map((color, index) => <GridItem key={'b' + index.toString()}><Circle style={{margin: 'auto'}} size='6' bg={color} border={bgColor === color ? '2px' : '0'} borderColor="gray.200" onClick={()=>handleBgColor(color)} /></GridItem>)}
                <GridItem colSpan={5}>
                    <Text color="gray">Foreground</Text>
                </GridItem>
                {['#000000', '#b71c1c', '#4a148c', '#1a237e','#01579b',
                    '#004d40', '#003d00', '#bc5100', '#dd2c00', '#870000'].map((color, index) => <GridItem key={'f' + index.toString()} style={{margin: 'auto'}}><Circle size='6' bg={color} border={'0'} borderColor="gray.200" onClick={()=>handleFgColor(color)} /></GridItem>)}
                <GridItem colSpan={4}>
                    <Button leftIcon={<AiOutlineDownload/>} onClick={handleDownload}>Download</Button>
                </GridItem>
            </Grid>
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
          FontFamily.configure({
            types: ['textStyle'],
          }),
          Highlight.configure({
            multicolor: true,
          }),
          Color.configure({
            types: ['textStyle'],
          }),
          Underline,
          TextStyle
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
            <Flex w="568px" h="660px" bg={bgColor} p="4" borderRadius="2xl" id="canvas" marginTop={'4'}>
                <Flex direction="column" p="5" w="full" h="full" borderRadius="lg" style={{overflow: 'hidden'}}>
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