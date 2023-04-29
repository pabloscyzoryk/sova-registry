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
  useMediaQuery,
} from '@chakra-ui/react';

const Advantages: FC = () => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  return (
    <HStack
      position='relative'
      bg='teal.800'
      w='100vw'
      h='95vh'
      as='section'
      className='pros'
      justify='space-around'
      flexWrap='wrap-reverse'
    >
      <VStack align='start' maxW={['90%', '60%', '30%']} gap={5}>
        <Heading
          textAlign={['center', 'center', 'left']}
          fontSize={['5xl', '6xl', '7xl']}
          color='white'
        >
          Why Sova registry?
        </Heading>
        <Text
          textAlign={['center', 'center', 'left']}
          fontSize={['xl', '2xl', '2xl']}
          fontWeight='bold'
          color='white'
        >
          Our products does not only feature attractive, accessible and
          resposvie design, but also reliable security mechanisms. Sova was
          designed with users in mind, makign it easy and user-friendly.
        </Text>
      </VStack>

      <Center>
        <Image
          transform='scaleX(-1)'
          alt='laptop'
          h={[230, 300, 350]}
          src={
            isMobile
              ? '/assets/home/laptop_mobile.png'
              : '/assets/home/laptop.png'
          }
        />
      </Center>
    </HStack>
  );
};

export default Advantages;
