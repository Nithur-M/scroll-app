import { useState } from "react";
import { Flex, Text, List, ListItem, OrderedList, } from "@chakra-ui/react";
import Listicle from '../Templates/Listicle'
import Basic from '../Templates/Basic'

const Canvas = () => {
    return(
        <Flex justify="center" id="canvas">
            <Basic />
        </Flex>
    )
}

export default Canvas;