import { ChakraProvider,  extendTheme } from '@chakra-ui/react';
import Layout from '../Components/Layout';
import "@fontsource/poppins"
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

function MyApp({ Component, pageProps }) {
  const config = {
    useSystemColorMode: false,
    initialColorMode: "light",
  }
  
  const customTheme = extendTheme({
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
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
          fontWeight: '300',
          fontSize: '18',
          backgroundColor: '#D8D9CF'
          //backgroundColor: '#F0F2B6',
          // backgroundImage: '/planet-earth-global-svgrepo-com.svg',

          // backgroundSize: '250px',
          // backgroundPosition: '300px 0px',
        },
        'h1, h2, h3, h4, h5, h6': {
          fontSize: 'revert',
          fontWeight: 'revert'
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
