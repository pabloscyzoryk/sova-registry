// imports
import { GetServerSideProps, type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { type FormEvent } from 'react';

// chakra-ui
import {
  Box,
  Heading,
  Center,
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';
import { getServerAuthSession } from '~/server/auth';

const Welcome: NextPage = () => {

  const handleSubmit = async (e: FormEvent) => { 

  };

  return (
    <>
      <NextSeo title='Welcome' />
      <Center as='main' maxW='100%' w='100vw' h='100vh' bg='primary'>
        <Flex as='form'>

        </Flex>
      </Center>
    </>
  );
};

export default Welcome;
