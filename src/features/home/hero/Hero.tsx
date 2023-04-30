// imports
import { type FC } from 'react';
import { useSession } from 'next-auth/react';
import { BsChevronDown } from 'react-icons/bs';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

// chakra-ui
import {
  Box,
  Heading,
  Button,
  Divider,
  Highlight,
  Text,
  VStack,
  HStack,
  Flex,
  StatDownArrow,
  Icon,
} from '@chakra-ui/react';

const Hero: FC = () => {

  return (
    <>
      <Box
        as='section'
        className='hero'
        w='full'
        h='100vh'
        zIndex={0}
        position='fixed'
        left={0}
        top={0}
      >
        <VStack
          w='full'
          h='full'
          justify='center'
          bgSize='cover'
          bgRepeat='no-repeat'
          bgPosition='center'
          objectFit='cover'
          bgImage='/assets/home/students.png'
        >
          {/*prettier-ignore*/}
          <Heading maxW={["80%", "70%", "70%"]} color='white' textAlign='center' fontSize={['4xl', '2xl', '7xl']}>
            <Text as='span' display='block'>Manage your students in a</Text>
            <Text as='span' display='block'><Highlight query='better way' styles={{ textDecoration: 'underline', color: 'teal.100' }}>better way than ever with</Highlight></Text>
            <Text as='span' display='block'>Sova registry.</Text>
        </Heading>

          <Flex
            style={{ marginTop: '100px' }}
            justify='space-around'
            w={['70%', '30%', '20%']}
          >
            <Button
              borderRadius='full'
              color='white'
              border='1px solid white'
              _hover={{ bgColor: 'white', color: 'black' }}
              bgColor='transparent'
              size='lg'
              fontWeight='bold'
              as={Link}
              href='/docs'
            >
              Docs
            </Button>

            <Divider orientation='vertical' />
            <Button
              href='/login'
              as={Link}
              borderRadius='full'
              colorScheme='teal'
              size='lg'
              fontWeight='bold'
            >
              Log in
            </Button>
          </Flex>

          <VStack
            color='white'
            bottom={5}
            position='absolute'
            _hover={{ textDecoration: 'none' }}
            href='#more'
            as={Link}
            cursor='pointer'
          >
            <Text position='relative' top={2}>
              learn more
            </Text>
            <Icon fontSize='4xl' as={BsChevronDown} />
          </VStack>
        </VStack>
      </Box>
      <Box h='100vh' w='100vw' />
    </>
  );
};

export default Hero;
