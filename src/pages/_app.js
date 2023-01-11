import { DataLoaderProvider } from '@scaleway/use-dataloader'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import './index.css'

const Website = ({ Component, pageProps, router }) => {
  return (
    <DataLoaderProvider>
      <ChakraProvider theme={theme}>
        <Layout router={router}>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </ChakraProvider>
    </DataLoaderProvider>
  )
}

export default Website
