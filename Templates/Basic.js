import { useState } from "react";
import { Flex, Text, Button, SimpleGrid, Grid, GridItem, Circle } from "@chakra-ui/react";


const Basic = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

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
            fontWeight: '600',
            mt: 0,
            boxShadow: '1px 5px 10px rgb(0 0 0 / 0.2)',
            borderRadius: 'lg'
        }),        
    };

    const handleKeyCommand = (command) => {
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if (newState) {
            onChange(newState);
            return 'handled';
        }
        return 'not-handled';
    }

    const onChange = (editorState) => {
        setEditorState(editorState)
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
            window.saveAs(blob, 'my-node.png');
        });
    }

    return(
        <Flex>
            <Flex w="568px" h="660px" bg="white" p="4" borderRadius="2xl">
                <Flex direction="column" p="5" w="full" h="full" >
                    <Text textAlign="center" fontWeight="700" fontSize="3xl" contentEditable={true} noOfLines="2" mb="3">WHAT DOES THIS APP DO ANYWAYS?</Text>
                    {/* <UnorderedList contentEditable={true} fontSize="xl" spacing={3}>
                        <ListItem>This is a content template</ListItem>
                        <ListItem>You can edit this and save it as an image</ListItem>
                        <ListItem>Why I made this?</ListItem>
                        <ListItem>To enable creators to share content in a way that actually gets read</ListItem>
                        <ListItem>It perfectly fits the Twitter image viewport</ListItem>
                        <ListItem>Just drop your content here and generate it as an image</ListItem>
                        <ListItem>I'll add more templates soon</ListItem>
                        <ListItem>If you have any template ideas, please let me know</ListItem>
                        <ListItem>Thanks</ListItem>
                    </UnorderedList> */}

                    <Editor
                        editorState={editorState}
                        handleKeyCommand={handleKeyCommand}
                        onChange={onChange}
                    />
                </Flex>
            </Flex>

            <Flex direction="column" bg="white" w="60" borderRadius="lg" h="max-content">
                <Grid templateColumns='repeat(4, 1fr)' gap={2} h="44" p="2">
                    <GridItem colSpan={4} >
                        <Select
                            chakraStyles={chakraStyles}
                            components={customComponents}
                            selectedOptionStyle="check"
                            defaultValue={{label: "Heading", value: "H1"}}
                            options={[
                            {
                                label: "Heading",
                                value: "H1",
                                isFixed: true,
                                isActive: true
                            },
                            {
                                label: "Heading2",
                                value: "H2",
                                isFixed: true,
                            },
                            {
                                label: "Heading3",
                                value: "H3",
                                isFixed: true,
                            },
                            {
                                label: "Heading4",
                                value: "H4",
                                isFixed: true,
                            },
                            {
                                label: "Heading5",
                                value: "H5",
                                isFixed: true,
                            },
                            {
                                label: "Heading6",
                                value: "H6",
                                isFixed: true,
                            },
                            ]}
                        />
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray' isActive={true}><AiOutlineBold /></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><AiOutlineItalic /></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><AiOutlineUnderline /></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><GoQuote /></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><AiOutlineAlignLeft/></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><AiOutlineAlignCenter/></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><AiOutlineAlignRight/></Button>
                    </GridItem>
                    <GridItem>
                        <Button colorScheme='gray'><AiOutlineHighlight /></Button>
                    </GridItem>
                </Grid>

                <Text color="gray">Border</Text>
                <Grid templateColumns='repeat(5, 1fr)' gap={2} p="2">
                    {['tomato', 'blue', 'pink', 'red', 'purple'].map(color => <GridItem><Circle size='6' bg={color} /></GridItem>)}
                </Grid>

                <Text color="gray">Background</Text>
                <Grid templateColumns='repeat(5, 1fr)' gap={2} p="2">
                    {['tomato', 'blue', 'pink', 'red', 'purple'].map(color => <GridItem><Circle size='6' bg={color} /></GridItem>)}
                </Grid>
            </Flex>
        </Flex>
    )
}

export default Basic;