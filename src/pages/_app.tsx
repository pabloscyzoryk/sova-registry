// imports
import { type AppType } from 'next/app';
import { type Session } from 'next-auth';
import { type GetServerSideProps } from 'next';
import { authOptions } from '~/server/auth';
import { SessionProvider } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { DefaultSeo } from 'next-seo';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import SEO from '../../next-seo.config';
import { api } from '~/utils/api';
import "@fontsource/montserrat";

// chakra-ui
import { ChakraProvider } from '@chakra-ui/react';
import theme from '~/config/theme';

// components
import Footer from '~/components/global/footer';
import Navbar from '~/components/global/navbar';

// global styles
import '~/styles/globals.css';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <ReactQueryDevtools />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
