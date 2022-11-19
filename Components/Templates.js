import { Flex, Image } from "@chakra-ui/react";

const templates = ['Basic', 'Listicle'];

const Templates = () => {
    return (
        <Flex direction="column" gap="2">
            {templates.map(template => <Flex w="42" h="48"><Image src={`/assets/templates/${template}.png`}/></Flex>)}

        </Flex>
    )
}

export default Templates;