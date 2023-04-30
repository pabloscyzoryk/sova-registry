// imports
import { type NextPage } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { type FormEvent } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaDiscord } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { type GetServerSideProps } from 'next';
import { authOptions } from '~/server/auth';
import { getServerSession } from 'next-auth';

// components
import PasswordInput from '~/components/common/PasswordInput';
import LoggingMethod from '~/components/common/LoggingMethod';

// chakra-ui
import {
  Box,
  Flex,
  Text,
  Button,
  FormLabel,
  FormControl,
  FormHelperText,
  Input,
  Divider,
  Heading,
  Image,
  Center,
} from '@chakra-ui/react';

const Login: NextPage = () => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };

  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <NextSeo title='Login' />
      <Flex
        align='center'
        bg='primary'
        maxW='100vw'
        h={['200vh', '200vh', '100vh']}
        as='main'
        flexWrap='wrap'
      >
        <Flex
          align='center'
          p={5}
          py={10}
          bg='secondary'
          direction='column'
          onSubmit={handleSubmit}
          as='form'
          width={['100%', '100vh', '40%']}
          height={['50%', '50%', '100%']}
        >
          <Heading p={5} color='white'>
            Welcome back,
          </Heading>
          <Box p={3} textAlign='center' color='white'>
            Don&apos;t have an account yet?&nbsp;
            <Text
              _hover={{ textDecoration: 'underline' }}
              as={Link}
              href='/signup'
              color='teal'
            >
              Sign up
            </Text>
            &nbsp;instead.
          </Box>
          <FormControl w='80%' mt={3} isRequired>
            <FormLabel color='white'>Email:</FormLabel>
            <Input
              bg='secondary'
              color='white'
              _placeholder={{ color: 'senary' }}
              borderColor='quinary'
              type='text'
              name='email'
              placeholder='youremail@email.com'
            />
          </FormControl>
          <FormControl w='80%' mt={3} isRequired>
            <FormLabel color='white'>Password:</FormLabel>
            <Input
              bg='secondary'
              color='white'
              _placeholder={{ color: 'senary' }}
              borderColor='quinary'
              type='password'
              name='password'
              placeholder='********'
            />
          </FormControl>

          <Flex w='80%' justify='end'>
            <Text
              cursor='pointer'
              _hover={{ textDecoration: 'underline' }}
              p={4}
              textAlign='right'
              color='white'
            >
              Forgot password?
            </Text>
          </Flex>

          <Flex w='80%' justify='start'>
            <Button colorScheme='teal'>Log in</Button>
          </Flex>

          <Text mt={5} textAlign='center' color='quinary'>
            or log in with a provider
          </Text>

          <Flex direction='column' gap={5} w='80%' justify='center' mt={8}>
            <LoggingMethod
              provider='google'
              style={{
                bg: '#ea4335',
                color: 'white',
                transition: '.1s linear',
                _hover: { bg: 'primary', outline: '3px solid #ea4335' },
              }}
              icon={FcGoogle}
            >
              Log in with Google
            </LoggingMethod>
            <LoggingMethod
              provider='discord'
              iconStyle={{ color: '#7289da' }}
              style={{
                bg: '#7289da',
                transition: '.1s linear',
                color: 'white',
                _hover: { bg: 'primary', outline: '3px solid #7289da' },
              }}
              icon={FaDiscord}
            >
              Log in with Discord
            </LoggingMethod>
            <LoggingMethod
              provider='github'
              iconStyle={{ color: 'black' }}
              style={{
                color: 'black',
                transition: '.1s linear',
                bg: 'white',
                _hover: {
                  color: 'white',
                  bg: 'primary',
                  outline: '3px solid white',
                },
              }}
              icon={FaGithub}
            >
              Log in with Github
            </LoggingMethod>
          </Flex>
        </Flex>
        <Flex
          w={['100%', '100%', '60%']}
          height={['50%', '50%', '100%']}
          position='relative'
          overflow='hidden'
        >
          <Image
            src='/assets/login/ballons.png'
            w='full'
            h='full'
            maxW='full'
            maxH='full'
            objectFit='cover'
            filter='brightness(0.4)'
            _hover={{ transform: 'scale(1.05)' }}
            transition='.4s ease-in-out'
          />
          <Flex
            align='start'
            w='100%'
            pl={['10%', '10', '30%']}
            gap={3}
            direction='column'
            position='absolute'
            color='white'
            top='50%'
            left='50%'
            transform='translate(-50%, -50%)'
            pointerEvents='none'
          >
            <Heading fontSize='5xl'>Did you know that...</Heading>
            <Text maxW={500} fontSize='xl'>
              Sova Registry is the only registry avaiable with multiple account
              providers support?
            </Text>
          </Flex>
          <Button
            position='absolute'
            border='1px solid white'
            bottom={10}
            right={10}
            alignSelf='center'
            borderRadius='full'
            _hover={{ bg: 'white', color: 'black' }}
            bg='transparent'
            color='white'
            as={Link}
            href='/docs'
          >
            Read docs
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => { 
  const session = await getServerSession(ctx.req, ctx.res, authOptions);
  
  if(!session) {
    return {
      props: {
        session: null
      }
    }
  }

  const { firstName, secondName } = session.user;

  if(firstName && secondName) { 
    return {
      props: {
        session
      }
    }
  } 
  else {
    return {
      redirect: {
        destination: '/welcome',
        permanent: false
      }
    }
  }
}

export default Login;
