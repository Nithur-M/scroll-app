import { useState } from "react";
import { Flex, Text, List, ListItem, OrderedList, } from "@chakra-ui/react";

const Listicle = () => {
    return(
        <Flex w="568px" h="660px" bg="#393E46" p="4" borderRadius="2xl">
            <Flex direction="column" p="5" w="full" h="full" border="2px" borderColor="red.500" borderRadius="2xl">
                <Text textAlign="center" fontWeight="700" fontSize="3xl" color="white" contentEditable={true} noOfLines="2" mb="3">WHAT DOES THIS APP DO ANYWAYS?</Text>
                <OrderedList contentEditable={true} color="white" fontSize="xl" spacing={3}>
                    <ListItem>This is a content template</ListItem>
                    <ListItem>You can edit this and save it as an image</ListItem>
                    <ListItem>Why I made this?</ListItem>
                    <ListItem>To enable creators to share content in a way that actually gets read</ListItem>
                    <ListItem>It perfectly fits the Twitter image viewport</ListItem>
                    <ListItem>Just drop your content here and generate it as an image</ListItem>
                    <ListItem>I'll add more templates soon</ListItem>
                    <ListItem>If you have any template ideas, please let me know</ListItem>
                    <ListItem>Thanks</ListItem>
                </OrderedList>
            </Flex>
        </Flex>
    )
}

export default Listicle;