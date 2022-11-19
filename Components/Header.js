import { Flex, Text, Box, Spacer, useColorModeValue, useColorMode, Button, useMediaQuery,
    Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/react';

    
const Header = () => {
    const borderColor = useColorModeValue('gray.300', 'gray.700');
    const { colorMode, toggleColorMode } = useColorMode()
    const [isMobile] = useMediaQuery("(max-width: 768px)")
    
    return(
        <Flex borderBottom="1px" borderColor={borderColor} align={isMobile ? 'none' : "baseline"} p="1" gap="2" >
            <>📜 Scroll</>
            <Spacer />

            <>Download</>            
        </Flex>
    )
}

export default Header;