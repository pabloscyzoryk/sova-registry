// imports
import { type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { type GetServerSideProps } from 'next';
import { getServerAuthSession } from '~/server/auth';

// chakra-ui
import { Box } from '@chakra-ui/react';

// features
import Hero from '~/features/home/hero';
import Pros from '~/features/home/pros';
import Advantages from '~/features/home/advantages';
import Features from '~/features/home/features';
import Reviews from '~/features/home/reviews';
import Contact from '~/features/home/contact';

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title='Home' />
      <Box overflowX='hidden' as='main' className='Home'>
        <Hero />
        <Pros />
        <Advantages />
        <Features />
        <Reviews />
        <Contact />
      </Box>
    </>
  );
};

export default Home;
