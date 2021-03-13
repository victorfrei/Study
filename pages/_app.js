import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Head>
        <title>Skap</title>
        </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;