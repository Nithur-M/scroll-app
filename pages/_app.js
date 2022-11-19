import { ChakraProvider,  extendTheme } from '@chakra-ui/react';
import Layout from '../Components/Layout';
import "@fontsource/open-sans"
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/800.css";

function MyApp({ Component, pageProps }) {
  const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
  }
  
  const customTheme = extendTheme({
    fonts: {
      heading: `'Open Sans', sans-serif`,
      body: `'Open Sans', sans-serif`,
    },
    colors: {
      brand: {
        50: '#80b3ff',
        100: '#66a3ff',
        200: '#0066ff',
        300: '#005ce6',
        400: '#1a75ff',
        500: '#0066ff',
        600: '#005ce6',
        700: '#0052cc',
        800: '#0047b3',
        900: '#003d99',      
      }
    },
    styles: {
      global: {
        // styles for the `body`
        body: {
          h: '100%',
          backgroundColor: '#DFDBE5'
          //backgroundColor: '#F0F2B6',
          // backgroundImage: '/planet-earth-global-svgrepo-com.svg',

          // backgroundSize: '250px',
          // backgroundPosition: '300px 0px',
        }
      }
    }
    ,config });
    
  return (
  <ChakraProvider theme={customTheme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
