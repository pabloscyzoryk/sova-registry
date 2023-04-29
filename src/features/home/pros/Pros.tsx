// imports
import { type FC } from 'react';
import Tilt from 'react-parallax-tilt';

// chakra-ui
import {
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';

const Pros: FC = () => {
  return (
    <HStack
      position='relative'
      bg='primary'
      w='100vw'
      h='100vh'
      as='section'
      className='pros'
      justify='space-around'
      flexWrap='wrap'
      id='more'
    >
      <Center>
        <Center
          position='relative'
          bgColor='white'
          borderRadius='900px'
          w={[230, 275, 325]}
          h={[230, 275, 325]}
        >
          <Tilt gyroscope={true}>
            <Image h={[315, 450, 450]} src='/assets/home/phoneframe.png' />
          </Tilt>
        </Center>
      </Center>

      <VStack align='start' maxW={['90%', '60%', '30%']} gap={5}>
        <Heading
          textAlign={['center', 'center', 'left']}
          fontSize={['5xl', '6xl', '7xl']}
          color='white'
        >
          Responsive and secure
        </Heading>
        <Text
          textAlign={['center', 'center', 'left']}
          fontSize={['xl', '2xl', '2xl']}
          fontWeight='bold'
          color='white'
        >
          Our products does not only feature attractive, accessible and
          resposvie desigm, but also reliable sectiry mechanisms. Sova was
          designed with users in mind, makign it easy and user-friendly.
        </Text>
      </VStack>
    </HStack>
  );
};

export default Pros;
